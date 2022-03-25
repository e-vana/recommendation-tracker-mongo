<template>
        <div class="nav">
        <ul>
          <li>About</li>
          <li><button class="button-login">Login</button></li>
        </ul>
      </div>
</template>

<script>
export default {

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