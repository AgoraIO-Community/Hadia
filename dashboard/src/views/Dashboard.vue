<template>

    <div class="row">



        <div class="col col-lg-12">
            <section class="card">
                <div class="card-body text-secondary">
                    <card header-text="List of callers">
                    <ul>
                        <li v-for="i in revuser"> <p>{{i._id}}</p>
                            <button class="btn btn-outline-success" v-if="i.state==='new'" @click="pickCall(i)">Pick Up</button>
                            <span class="badge badge-warning" v-else-if="i.state==='picked'">Already answered</span>
                </li>
                        <li v-if="callingUsersArray.length===0"><p> No Calls Yet</p>

                        </li>
                    </ul>

                    </card>
                </div>
            </section>
        </div>
        <div class="col col-lg-12">
            <section class="card">
                <!--<div class="card-body text-secondary"><a @click="notify"> hello</a></div>-->
            </section>
        </div>
        <notifications group="call"
                       :duration="5000"
                       :width="500"
                       animation-name="v-fade-left"
                       position="top right">

            <template slot="body" slot-scope="props">
                <div class="custom-template">
                    <div class="custom-template-icon">
                        <i class="icon ion-android-checkmark-circle"></i>
                    </div>
                    <div class="custom-template-content">
                        <div class="custom-template-title">
                            {{props.item.title}}

                            <a style="display: flex;flex-direction: row; cursor: pointer;" :href="props.item.data.call.call_page_origin" target="about:_blank">
                                <p style="    font-size: 10px;text-overflow: ellipsis;max-width: 300px;overflow: hidden;white-space: nowrap;" >
                                    On Page   '{{props.item.data.call.call_page_origin}}'<br/>
                                </p><i class="fa fa-external-link"></i>
                            </a>
                            {{new Date(props.item.data.call.created_at).toDateString()}}
                        </div>

                        <div class="custom-template-text">

                            <button class="btn btn-outline-success" @click="pickCall(props.item.data,props)">Pick Up</button>
                            <button class="btn btn-outline-warning" @click="props.close">Ignore</button></div>
                    </div>
                    <div class="custom-template-close"
                         @click="props.close">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                </div>
            </template>
        </notifications>
        <basix-modal :oncall="oncall" @ok="hangUp" :show.sync="show" :large="true" okText="End Call" cancelClass="hidden" ref="largeModal">
            <div slot="title">Talking to user with generated id {{currentUser?currentUser._id:''}}</div>
            Page user initiated call<a :href="currentUser?currentUser.call_page_origin:''" target="about:_blank"> {{currentUser?currentUser.call_page_origin:''}} <i class="fa fa-external-link"></i></a>
        <br/>

            <div style="display:flex;flex-direction:column;justify-content:center;"  v-if="oncall" >
                <i class="fa fa-microphone success" aria-hidden="true"  v-if="oncall" style="margin: auto;font-size: 250px;margin-top:10px;"></i>

                <p class="btn-outline-success"> connected</p>
            </div>
            <div style="display:flex;flex-direction:column;justify-content:center;" v-else>
                <i class="fa fa-spinner fa-spin" style="margin: auto;font-size: 150px;margin-top:10px;"></i>
                <p> connecting ...</p>
            </div>

        </basix-modal>
        <div style="display: none;" id="user"></div><div  style="display: none;" id="agent"></div>
    </div>

</template>

<script>
import pusher from '../assets/js/pusher'
import api from '../assets/js/api'
import BasixModal from '../components/basix-modal/BasixModal.vue';
import  Vue from 'vue'
import AgoraRTC from 'agora-rtc-sdk'
let appId='168bb4cac34a49f3b25378cbbfc8dbb7',
    client = AgoraRTC.createClient({mode: 'live', codec: "h264"}),
    clientToken,
    localStream,
    remoteStream,
    localAudio = 'agentsaudio',
    remoteAudio = 'usersaudio'
export default {
    name: 'dashboard',
    components: {
        BasixModal,

    },
    data() {
        return {
            currentUser:{
                call_page_origin:''
            },
            show: '',
            apiUrl: 'https://vuetable.ratiw.net/api/users',
            apiMode: true,
            paginationPath: '',
            callingUsersArray: JSON.parse(localStorage.getItem('callingUsers')||'[]'),
            agentDetails: JSON.parse(localStorage.getItem('loginCred') || null),
            oncall:false
        }
    },
computed:{
        revuser(){
        return this.callingUsersArray.reverse()
    }
},
    methods: {

        showLargeModal() {
            this.$refs.largeModal.open()
        },
        notify(val) {
            // this.$refs.largeModal.open()
            this.$notify({group: 'call', title: `Call from User`, type: 'success', data: {call: val}, duration: -1})
        },
        suscribeChannel() {
            try {
                pusher.suscribechannel(this.agentDetails.page[0]._id)
                pusher.events('incoming-call', (data) => {
                    this.notify(data)
                    data.state='new'
                    let idx =this.callingUsersArray.findIndex(val=>{return val._id===data._id}),value;
                    if(idx===-1){

                        this.callingUsersArray.push(data)
                    }else{
                        value=this.callingUsersArray[idx]
                        value.state='new'
                        Vue.set(this.callingUsersArray,idx,value)
                    }
                })
                pusher.events('picked-call', (data) => {
                    this.callingUsersArray.find((val,idx)=> {
                        if(val._id===data.user){
                            val.agent=data._id
                            val.state='picked'
                            return Vue.set(this.callingUsersArray,idx,val)
                        }
                    })
                })

            }
            catch (e) {
                this.$router.push({path: '/auth/login'})
            }

        },
        pickCall(data,props) {
            if(props)
            props.close()
            this.currentUser=props.item.data.call
            api.answerCall({agent: this.agentDetails._id, user: data.call._id, page: this.agentDetails.page[0]})
                .then(response => {
                    if (response.success) {
                        this.showLargeModal()
                        this.initializeJoinAndCall(response.channel_cred.channel_name,response.channel_cred.channel_key,response.channel_cred.uid)


                    }
                    console.log(response)
                })

        },
        checkSupport() {
            return AgoraRTC.checkSystemRequirements()
        },
        initializeJoinAndCall(channelName, channelKey, uid) {
            if (this.checkSupport()) {
                    //initialize agora
                    client.init(appId, () =>{
                        // join agent in room
                        client.join(channelKey, channelName, uid,(uid)=> {
                            //get audio stream
                            this.oncall=true
                            console.log("User " + uid + " join channel successfully");
                            localStream = AgoraRTC.createStream({
                                streamID: uid,
                                audio: true,
                                video: false,
                                screen: false}
                            );
                            localStream.init(function() {
                                console.log("getUserMedia successfully");
                                localStream.play('user');
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
                    client.on('stream-subscribed', function (evt) {
                        let remoteStream = evt.stream;
                        remoteStream.play('agent');
                        mode='conversing'
                        main_page_widget.create()
                    })
                    client.on('stream-added', function (evt) {
                        let stream = evt.stream;
                        console.log("New stream added: " + stream.getId());

                        client.subscribe(stream, function (err) {
                            console.log("Subscribe stream failed", err);
                        });
                        //suscribed stream

                    });

//todo changes to be made to event
                    client.on('stream-removed', function (evt) {
                        var stream = evt.stream;
                        stream.stop();
                        localStream.stop()
                        console.log("Remote stream is removed " + stream.getId());
                    });
                    client.on('peer-leave', function (evt) {
                        this.oncall=false
                        var stream = evt.stream;
                        if (stream) {
                            stream.stop();
                            localStream.stop()
                            // $('#agora_remote' + stream.getId()).remove();
                            console.log(evt.uid + " leaved from this channel");
                        }
                    });

            }
        },hangUp(){
                if(client)
                    client.leave(() => {
                        this.oncall=false
                        this.callingUsersArray.find((val,idx)=> {
                            if(val._id===this.currentUser._id){
                                val.state='ended'
                                return Vue.set(this.callingUsersArray,idx,val)
                            }
                        })
                    }, function (err) {
                        console.log("Leave channel failed");
                    });
            }
    },
    mounted(){
        try {
            this.suscribeChannel()
            api.status({agent: this.agentDetails._id,available:'yes',online:'yes',page: this.agentDetails.page[0]._id}).then(response=>{

            })
        }catch(e){

            this.$router.push({path:'/auth/login'})
        }

        window.addEventListener('beforeunload',()=>{
            this.hangUp()
            this.callingUsersArray.forEach(val=>{
                val.state='closed'
            })
            localStorage.setItem('callingUsers',JSON.stringify(this.callingUsersArray||[]))
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", `${api.currentBaseUrl()}agent/status`, false);//the false is for making the call synchronous
            xmlhttp.setRequestHeader("Content-type", "application/json");
            console.log({agent:this.agentDetails._id,available:'no',online:'no',page: this.agentDetails.page[0]._id})
            xmlhttp.send(JSON.stringify({page: this.agentDetails.page[0]._id,agent:this.agentDetails._id,available:'no',online:'no'}));
            console.log(xmlhttp)
            // // Chrome requires returnValue to be set.
            event.returnValue = '';
        })
    }
}


</script>

<style lang="scss">

    .notification.n-light {
        margin: 10px;
        margin-bottom: 0;
        border-radius: 3px;
        font-size: 13px;
        padding: 10px 20px;
        color: #495061;
        background: #EAF4FE;
        border: 1px solid #D4E8FD;
        .notification-title {
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 10px;
            color: #2589F3;
        }
    }
    .custom-template {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        text-align: left;
        font-size: 13px;
        margin: 5px;
        margin-bottom: 0;
        align-items: center;
        justify-content: center;
        &, & > div {
            box-sizing: border-box;
        }
        background: #E8F9F0;
        border: 2px solid #D0F2E1;
        .custom-template-icon {
            flex: 0 1 auto;
            color: #15C371;
            font-size: 32px;
            padding: 0 10px;
        }
        .custom-template-close {
            flex: 0 1 auto;
            padding: 0 20px;
            font-size: 16px;
            opacity: 0.2;
            cursor: pointer;
            &:hover {
                opacity: 0.8;
            }
        }
        .custom-template-content {
            padding: 10px;
            flex: 1 0 auto;
            .custom-template-title {
                letter-spacing: 1px;
                text-transform: uppercase;
                font-size: 10px;
                font-weight: 600;
            }
        }
    }
    .v-fade-left-enter-active,
    .v-fade-left-leave-active,
    .v-fade-left-move {
        transition: all .5s;
    }
    .v-fade-left-enter,
    .v-fade-left-leave-to {
        opacity: 0;
        transform: translateX(500px) scale(0.2);
    }
    .modal-lg{
        height: 100%!important;
    }
    .hidden{
        display: none;
    }
    .modal-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    li{
        list-style-type: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>