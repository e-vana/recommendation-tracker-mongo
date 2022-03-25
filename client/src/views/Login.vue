<template>
  <div class="login-container">
    <form action="">
      <label for="">Email Address</label>
      <br>
      <input type="text" v-model="email" placeholder="johndoe@school.edu">
      <br>
      <label for="">Password</label>
      <br>
      <input type="password" v-model="password">
      <br>
      <button @click="login" class="button-login">Login</button>
    </form>
      <Spinner></Spinner>

  </div>
</template>

<script>
import Spinner from '@/components/loaders/Spinner.vue'
import loadingState from '@/mixins/loadingState.js'
import axios from 'axios';

export default {
  components: {
    Spinner
  },
  mixins: [loadingState],
  data() {
    return {
      password: null,
      email: null
    }
  },
  methods: {
    login: async function(){
      try {
        let body = { 
          emailAddress: this.email,
          password: this.password
        }
        let tryLogin = await axios.post(process.env.VUE_APP_BASE_URL+'/api/login', body);
        let token = tryLogin.response.data;
        console.log(token)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
.login-container {
  max-width: 400px;
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
</style>