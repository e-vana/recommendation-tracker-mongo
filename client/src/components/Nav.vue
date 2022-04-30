<template>
  <div class="nav">
    <ul>
      <li v-if="routeName != 'Home'"><router-link to="/">Home</router-link></li>
      <li v-if="!$store.state.isLoggedIn && routeName != 'Login'">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!$store.state.isLoggedIn && routeName != 'Register'">
        <router-link to="/register">Register</router-link>
      </li>
      <li v-if="$store.state.isLoggedIn && routeName != 'Dashboard'">
        <router-link to="/dashboard">Dashboard</router-link>
      </li>

      <li v-if="$store.state.isLoggedIn">
        <router-link to="/settings">Settings</router-link>
      </li>
      <li v-if="$store.state.isLoggedIn">
        <button @click="signOut" class="button-signout">Sign Out</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    routeName: function () {
      return this.$route.name;
    },
  },
  methods: {
    signOut: function () {
      this.$store.dispatch("logout");
      this.$store.dispatch("setToken", null);
      this.$router.push("/");
    },
  },
};
</script>

<style>
.button-signout {
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
.button-login {
  border: none;
  border-radius: 5px;
  background-color: var(--green-lighter);
  border: 1px solid var(--green);
  color: var(--green);
  padding: 10px 30px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  cursor: pointer;
}
.nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 40px 0px 40px 0px;
}
.nav ul {
  margin: 0px;
  padding: 0px;
}
.nav li {
  text-decoration: none;
  padding: 0px 0px 0px 30px;
  margin: 0px;
  display: inline;
}
.nav a {
  text-decoration: none;
  /* padding: 10px 20px; */
}
.nav a:hover {
  /* text-decoration: underline; */
  border-bottom: 2px solid var(--green);
  /* background-color: var(--green-lighter); */
}
.nav a:visited {
  color: var(--primary-black);
}
.settings-icon img {
  height: 50px;
  width: 50px;
}
</style>
