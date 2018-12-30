<template>
  <div class="login">

    <card header-text="Welcome !">
      <div class="card-body card-block">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
              <input type="email" id="email" v-model="cred.email" name="email" placeholder="Email" class="form-control">
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
              <input type="password" id="password"  v-model="cred.password" name="password" placeholder="Password" class="form-control">
            </div>
          </div>
          <div class="form-actions form-group">
              <button @click="login" class="btn btn-success btn-md">Log In</button>
              <button  class="btn btn-primary btn-md float-right">
                <router-link class='link text-light float-right' :to="{name: 'Register'}">Create Account</router-link>
              </button>
          </div>
      </div>
    </card>
    <notifications group="signup"
                   position="top right"
                   :speed="500" />
  </div>
</template>

<script>
import api from '../../assets/js/api'
export default {
  name: 'Login',
    data(){
      return {
      cred:{
          email : '',
          password : ''
      }
    }
  },
    methods:{
      login(){
          api.login(this.cred).then(response =>{
              if(response.success){
                  localStorage.setItem('loginCred',JSON.stringify(response.agent))
                  this.notify({title:'Login successful',text: 'Redirecting to dashboard in a few',type:'success'})
                  setTimeout(()=>{this.$router.push({path:'/dashboard',query:{page_id:response.agent.page[0]._id}})},5000)
              }else{
                  this.notify({title:'Login  unsuccessful',text: response.msg,type:'error'})

              }
          })
      },
        notify({title,text,type}){
            this.$notify({
                group:'signup',
                title: title,
                text: text,
                type: type
            })
        }
    }
}
</script>

<style lang="scss" scoped>
  .card-title{
    padding-left: 20px;
  }
</style>