<template>
  <div class="login-container">
    <form @submit.prevent="">
      <label for="">Email Address</label>
      <br>
      <input type="text" v-model="email" placeholder="johndoe@school.edu">
      <br>
      <label for="">Password</label>
      <br>
      <input type="password" v-model="password">
      <br>
      
      <div class="button-container">
        <button @click="login" type="submit" class="button-login">
          <span v-if="!loading">Login</span>
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
import AlertBlock from '../components/AlertBlock.vue'
import axios from 'axios';

export default {
  components: {
    Spinner,
    AlertBlock
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
        this.loading = true;
        let body = { 
          email: this.email,
          password: this.password
        }
        let tryLogin = await axios.post(process.env.VUE_APP_BASE_URL+'/api/users/login', body);
        if(tryLogin.data.token){
          this.$store.dispatch("login");
          this.$store.dispatch("setToken", tryLogin.data.token);
          this.loading = false;
          this.error = false;
          this.$router.push('/dashboard');
        }

      } catch (error) {
        this.loading = false;
        this.error = true;
        this.errorMessage = error.response.data.error;
      }
    }
  }
}
</script>

<style>
.button-container {
  text-align: right;
}
.login-container {
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
</style>