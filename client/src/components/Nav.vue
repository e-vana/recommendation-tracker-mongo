<template>
        <div class="nav">
        <ul>
          <li>About</li>
          <li v-if="routeName == 'Register'"><router-link to="/login"><button class="button-login">Login</button></router-link></li>
          <li v-if="routeName == 'Login'"><router-link to="/register"><button class="button-login">Sign Up</button></router-link></li>
        </ul>
      </div>
</template>

<script>
export default {
  computed: {
    routeName: function(){
      return this.$route.name
    }
  }
}
</script>

<style>

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

</style>