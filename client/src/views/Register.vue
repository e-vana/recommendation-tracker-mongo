<template>
  <div>
    <form action="submit" @submit.prevent="register">
      <label for="">Email Address</label>
      <input type="text" v-model="email" placeholder="Email Address">
      <label for="">Password</label>
      <input type="password" v-model="password">
      <button @click="submit">register</button>
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
    register: async function(){
      try {
        let body = { 
          emailAddress: this.email,
          password: this.password
        }
        let tryRegister = await axios.post(process.env.VUE_APP_BASE_URL+'/api/users/register', body);
        let token = tryRegister.response.data;
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