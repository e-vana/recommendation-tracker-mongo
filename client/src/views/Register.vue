<template>
  <div class="register-container">
    <form @submit.prevent="">
      <label for="">Email Address</label>
      <br>
      <input type="text" v-model="email" placeholder="johndoe@school.edu" class="no-margin" required>
      <p class="register-help-text">In order to register an instructor account you need to use a valid .edu email address.</p>
      <br>
      <label for="">Password</label>
      <br>
      <input type="password" v-model="password" required>
      <br>
      <label for="">Confirm Password</label>
      <br>
      <input type="password" v-model="passwordConfirm" required>
      <br>
      <div class="button-container">
        <button @click="register" type="submit" class="button-login">
          <span v-if="!loading">Register</span>
          <Spinner v-if="loading" color='1F832F' :size="15" :thickness="3"></Spinner>
        </button>
      </div>
      <transition name="fade" mode="out-in">
        <alert-block v-if="error" :alertMessage="errorMessage" variant="error" :key="errorMessage" ></alert-block>
      </transition>

    </form>

  </div>
</template>

<script>
import Spinner from '@/components/loaders/Spinner.vue'
import loadingState from '@/mixins/loadingState.js'
import {checkPassword} from '@/helpers/checkPassword.js'
import AlertBlock from '../components/AlertBlock.vue'
// import axios from 'axios';

export default {
  components: {
    Spinner,
    AlertBlock
  },
  mixins: [loadingState],
  data() {
    return {
      password: null,
      passwordConfirm: null,
      email: null
    }
  },
  methods: {
    register: async function(){
      try {
        this.loading = true;
        this.error = false;
        if(!this.email || !this.password || !this.passwordConfirm){
          throw 'Complete the form fields.'
        }
        let passwordCheckComplete = checkPassword(this.password);
        if(!passwordCheckComplete.success){
          throw passwordCheckComplete.message;
        }
        if(this.password !== this.passwordConfirm){
          throw 'Passwords do not match.';
        }
        if(!this.email.includes('.edu')){
          throw 'This email is not a .edu email address.'
        }
        console.log("Registered succesfully.")


        this.loading = false;
        this.error = false;
      } catch (error) {
        console.log(error)
        this.error = true;
        this.loading = false;
        this.errorMessage = error;
      }
    }
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.button-container {
  text-align: right;
}
.register-container {
  max-width: 300px;
  margin: 0px auto;
}
label {
  font-weight: 200;
}

::placeholder {
  color: rgb(201, 201, 201);
}
input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(221, 221, 221);
  margin: 0px 0px 20px 0px;
  width: 100%;
  box-sizing:border-box;

}

.button-login {
  border: none;
  border-radius: 5px;
  background-color: var(--green-lighter);
  color: var(--green);
  padding: 10px 30px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  cursor: pointer;

}
.button-login:focus {
  outline: 2px solid var(--green);
}

.register-help-text{
  font-size: 10px;
  color: var(--primary-black-lightest);
  margin: 5px 0px;
}
.no-margin {
  margin: 0px;
}
</style>