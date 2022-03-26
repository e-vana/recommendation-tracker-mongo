<template>
  <div id="app">
    <div class="content-container">
      <Nav/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
export default {
  components: {
    Nav
  }
  
}
</script>

<style>
:root {
  --primary-black: rgb(26, 26, 26);
  --primary-black-lighter: rgb(66, 66, 66);
  --primary-black-lightest: rgb(160, 160, 160);
  --green: #1F832F;
  --green-lighter: #A3FBB1;
  --red: rgb(160, 53, 53);
  --red-lighter: rgb(241, 194, 194);
}
body, html {
    margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Open Sans';

}
.content-container {
  max-width: 1000px;
  margin: 0 auto;
}

@media screen and (max-width: 1000px) {
  #app {
    padding: 0px 50px;
  }
}
</style>
