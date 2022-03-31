<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="generate-url-container">
      <button class="generate-url-button">Generate URL</button>
      <p class="help-text">Generate a URL to send a form to a student to request information for their letters of recommendation.</p>
    </div>
    <h2>Upcoming Deadlines</h2>
    <alert-block v-if="upcomingDeadlines == null || upcomingDeadlines.length == 0" alertMessage="There are no upcoming deadlines at this time." variant="success"></alert-block>
    <h2>Pending Requests</h2>
    <alert-block v-if="pendingRequests == null || pendingRequests.length == 0" alertMessage="There are no pending requests for student information at this time." variant="success"></alert-block>
    <h2>Completed Letters</h2>
    <alert-block v-if="completedLetters == null || completedLetters.legnth == 0" alertMessage="There are no completed letters to view.">
    </alert-block>
  </div>
</template>

<script>
import AlertBlock from '../components/AlertBlock.vue'
export default {
  components: {
    AlertBlock
  },
  data() {
    return{
      upcomingDeadlines: null,
      pendingRequests: null,
      completedLetters: null
    }
  }
}
</script>

<style>
.dashboard h1{
  color: var(--primary-black);
  margin: 0px;
  font-weight: 200;
}
.dashboard h2 {
  color: var(--primary-black);
  margin: 0px;
  font-weight: 200;
}
.generate-url-container {
  margin: 20px 0px;
}
.generate-url-button {
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: var(--alert-secondary);
  color: var(--alert-primary);
  padding: 10px 30px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  cursor: pointer;

}
.help-text{
  font-size: 10px;
  color: var(--primary-black-lightest);
  margin: 5px 0px;
}
</style>