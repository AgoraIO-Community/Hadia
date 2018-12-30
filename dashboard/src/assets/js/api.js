import axios from 'axios'


const baseUrl = 'https://hadia-backend.herokuapp.com/'


axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {

      // window.location.href = `/?#/auth/login`

      this.$router.push({path:'/auth/login'})
    return false
    // console.log(main)
  }else {
    return Promise.reject(error)
  }
})


export default {
  currentBaseUrl(){
    return baseUrl
  },

// signup
signup (agentData) {
  return axios.post(`${baseUrl}agent/signup`,agentData).then(response => {
    return response.data
  }).catch(error => {
    return error.response.data
  })
},
  login (cred) {
  return axios.post(`${baseUrl}agent/login`, cred)
  .then(response => {
    return response.data
  }).catch(error => {
    return error.response
  })
  },
  status (cred) {
  return axios.post(`${baseUrl}agent/status`, cred)
  .then(response => {
    return response.data
  }).catch(error => {
    return error.response
  })
} ,answerCall (cred) {
  return axios.post(`${baseUrl}call/answer-call`, cred)
  .then(response => {
    return response.data
  }).catch(error => {
    return error.response
  })
}
}
