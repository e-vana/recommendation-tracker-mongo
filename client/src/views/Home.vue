<template>
  <div class="home">
    <!-- <router-link to="/login">Login</router-link> -->
    <div class="hero-container">
      <div class="hero-text">
        <h1>Letter Tracker</h1>
        <p>Help your students get you the information you require to complete and manage their letters of recomendation.</p>
        <button class="button-primary" @click="routeHandler">Instructor Signup</button>
      </div>
      <div class="hero-image">
        <img src="@/assets/hero-banner.jpg" alt="">
      </div>
      <!-- <a href="https://www.vecteezy.com/free-vector/kids">Kids Vectors by Vecteezy</a> -->
    </div>
    <hr>
    <div class="card-container">
      <h2>Why use Letter Tracker?</h2>
      <div class="card-content-container">
        <div class="card">
          <h3 class="card-title">Get student info fast</h3>
          <p class="card-text">Generate a URL to request information from a student that they populate.</p>
          <p class="card-text">Get the information you require from a student directly so there is no conflicting information.</p>
        </div>
        <div class="card">
          <h3 class="card-title">Manage deadlines</h3>
          <p class="card-text">See all your letter deadlines at a glance and generate reminders for due dates.</p>
          <p class="card-text">View upcoming deadlines, manage your completed letters and set custom alerting to help you stay organized.</p>
        </div>
        <div class="card">
          <h3 class="card-title">Alert students</h3>
          <p class="card-text">Let a student know when you have completed their letter of recommendation.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    routeHandler: function(){

      this.$router.push('/login')
    }
  }
}
</script>

<style>
hr {
  width: 100%;
  margin: 40px 0px;
  border: 0; border-top: 1px solid rgb(221, 221, 221);
}
.hero-container {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
}
.hero-image {
  width: 50%;
  min-width: 300px;
}
.hero-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.hero-text {
  width: 50%;
  min-width: 300px;
}
.hero-text h1{
  color: var(--primary-black);
  margin: 0px;
  font-weight: 200;
}
.hero-text p {
  color: var(--primary-black-lighter);
  font-weight: 200;

  margin: 30px 0px; 
}
.button-primary {
  border: none;
  border-radius: 5px;
  background-color: var(--green-lighter);
  color: var(--green);
  padding: 20px 30px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  cursor: pointer;
}


.card-container {
  margin: 50px 0px;
}
.card-container h2 {
  margin: 40px 0px;
  font-weight: 200;
}
.card-content-container {
  display: flex;
  align-items: top;
  justify-content: space-between;
  gap: 40px;
}

.card {
  width: 200px;
}
.card-title {
  font-weight: 400;
  color: var(--primary-black);
  margin: 0px;
}
.card-text {
  font-weight: 200;
  color: var(--primary-black-lighter);
}

@media only screen and (max-width: 1000px){
  .hero-text {
    min-width: 50%;
  }
  .hero-image img {
    height: auto;
    display: cover;
  }
}

@media only screen and (min-width: 1000px){
  .card-container {
    padding: 0px 70px;
  }
}

@media only screen and (max-width: 700px){
  .hero-text {
    width: 100%;
    margin: 0px 0px 30px 0px;
  }
  .hero-image {
    width: 100%;
  }

  .hero-container {
    flex-wrap: wrap-reverse;
  }

}

</style>