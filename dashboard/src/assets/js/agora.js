import AgoraRTC from 'agora-rtc-sdk'
let appId='168bb4cac34a49f3b25378cbbfc8dbb7',
    client = AgoraRTC.createClient({mode: 'live', codec: "h264"}),
    clientToken,
    localStream,
    localAudio = 'agentsaudio',
    remoteAudio = 'usersaudio'



// (function () {
//
// }())




// initializeJoinAndCall(response.channel_name,response.channel_key,response.uid)


function checkSupport() {
    return AgoraRTC.checkSystemRequirements()

}

/**
 *  Agora voice call initialization
 */
function initializeJoinAndCall(channelName,channelKey,uid) {
    if(checkSupport()) {
        //initialize agora
        client.init(appId, function () {
            // join agent in room
            client.join(channelKey, channelName, uid, function(uid) {
                //get audio stream
                console.log("User " + uid + " join channel successfully");
                localStream = AgoraRTC.createStream({
                    streamID: uid,
                    audio: true,
                    video: false,
                    screen: false}
                );
                localStream.init(function() {
                    console.log("getUserMedia successfully");
                    localStream.play('#user');
                    client.publish(localStream, function (err) {
                        console.log("Publish local stream error: " + err);
                    });
                    client.on('stream-published', function (evt) {
                        console.log("Publish local stream successfully", evt);
                    });
                }, function (err) {
                    console.log("getUserMedia failed", err);
                });
            }, function(err) {
                console.log("Join agents channel failed", err);
            });
        }, function (err) {
            console.log("AgoraRTC client init failed", err);
        });
        // on error error
        client.on('error', function(err) {
            console.log("Got error msg:", err.reason);
            // if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
            //     client.renewChannelKey(channelKey, function(){
            //         console.log("Renew channel key successfully");
            //     }, function(err){
            //         console.log("Renew channel key failed: ", err);
            //     });
            // }
        });
        //stream added
        client.on('stream-added', function (evt) {
            let stream = evt.stream;
            console.log("New stream added: " + stream.getId());

            client.subscribe(stream, function (err) {
                console.log("Subscribe stream failed", err);
            });
            //suscribed stream
            client.on('stream-subscribed', function (evt) {
                let remoteStream = evt.stream;
                console.log("Subscribe remote stream successfully: " + stream.getId());
                stream.play('#agent');
            })
        });
//todo changes to be made to event
        client.on('stream-removed', function (evt) {
            var stream = evt.stream;
            stream.stop();
            localStream.stop()
            console.log("Remote stream is removed " + stream.getId());
        });
        client.on('peer-leave', function (evt) {
            var stream = evt.stream;
            if (stream) {
                stream.stop();
                localStream.stop()
                // $('#agora_remote' + stream.getId()).remove();
                console.log(evt.uid + " leaved from this channel");
            }
        });
    }
}


function endCall() {
    if(client)
        client.leave(function () {
            console.log("Leavel channel successfully");
        }, function (err) {
            console.log("Leave channel failed");
        });
}

function getDevices() {
    AgoraRTC.getDevices(function (devices) {
        for (var i = 0; i !== devices.length; ++i) {
            var device = devices[i];
            var option = document.createElement('option');
            option.value = device.deviceId;
            if (device.kind === 'audioinput') {
                option.text = device.label || 'microphone ' + (audioSelect.length + 1);
                audioSelect.appendChild(option);
            } else if (device.kind === 'videoinput') {
                option.text = device.label || 'camera ' + (videoSelect.length + 1);
                videoSelect.appendChild(option);
            } else {
                console.log('Some other kind of source/device: ', device);
            }
        }
    });
}
