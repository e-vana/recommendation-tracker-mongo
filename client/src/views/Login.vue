<template>
  <div>
    <form action="">
      <label for="">Email Address</label>
      <input type="text" v-model="email" placeholder="Email Address">
      <label for="">Password</label>
      <input type="password" v-model="password">
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>

import axios from 'axios';
export default {
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

</style>