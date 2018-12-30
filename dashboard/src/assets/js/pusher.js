import Pusher from 'pusher-js'

const pushercred={appId: '680396',
    key: 'a7808805b311e73d5b87',
    secret: '8b046937055a9d564ad7',
    cluster: 'us2',
    encrypted: true}
console.log(pushercred)
const pusher = new Pusher(pushercred.key,pushercred)
let channel={} ;
(function () {
  // defaults
  pusher.logToConsole = true
  pusher.connection.bind('error', function (err) {
    if (err.error.data.code === 4004) {
      console.log('>>> detected limit error')
    }
    console.log('error', err)
  })
  pusher.connection.bind('state_change', function (states) {
    // states = {previous: 'oldState', current: 'newState'}
    console.log(states.current)
  })
})()

export default {
  suscribechannel(val){
   channel=pusher.subscribe(`customerService-${val}`);
  },
  events (name, callback) {
    channel.bind(name, callback)
  }
}
