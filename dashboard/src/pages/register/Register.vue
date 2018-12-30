<template>
  <div class="register">

    <card header-text="Create New Account">


        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></i></div>
            <input type="text" id="firstname"  v-model="signupCred.first_name" name="firstname" placeholder="First Name" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></div>
            <input type="text" id="lastname" v-model="signupCred.last_name" name="lastname" placeholder="Last Name" class="form-control">
          </div>
        </div><div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><i class="fa fa-building-o" aria-hidden="true"></i></div>
            <input type="text" id="pagename" v-model="signupCred.page_name" name="pagename" placeholder="Business Name" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><i class="fa fa-envelope"></i></div>
            <input type="email" id="email" v-model="signupCred.email" name="email" placeholder="Email" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><i class="fa fa-asterisk"></i></div>
            <input type="password" id="password" v-model="signupCred.password" name="password" placeholder="Password" class="form-control">
          </div>
        </div>
        <div class="abc-checkbox abc-checkbox-primary">
          <input id="checkbox1"  v-model="agreed" type="checkbox" checked>
          <label for="checkbox1">
            <span class="abc-label-text" >I agree to <router-link to="">Terms of Use.</router-link></span>
          </label>
        </div>
        <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
          <button class="btn btn-primary" @click="sendData">
            Sign Up
          </button>
          <button type="submit" class="btn btn-primary btn-md float-right">
            <router-link class='link text-light float-right' :to="{name: 'login'}">Already joined?</router-link>
          </button>
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
    name: 'Register',
      data(){
        return{
        agreed:false,
        signupCred:{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            page_name:''
            }
        }
      },
      methods:{
        sendData(){
            if(this.agreed){
            api.signup(this.signupCred)
                .then(response =>{
                    if(response.success){
                        localStorage.setItem('loginCred',JSON.stringify(response.agent))
                        this.notify({title:'Sign Up successful',text: 'Redirecting to dashboard in a few',type:'success'})
                        setTimeout(()=>{this.$router.push({path:'/dashboard',query:{page_id:response.agent.page[0]}})},5000)
                    }else{
                        this.notify({title:'Sign Up unsuccessful',text: response.msg,type:'error'})

                    }
                })
                .catch(err=>{

                })
            }else{
                this.notify({title:'Sign Up unsccessful',text: 'Please aggree to terms and conditions',type:'warn'})

            }
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

<style lang="scss">
  .register {

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 2.6875rem;
    }
  }
</style>
