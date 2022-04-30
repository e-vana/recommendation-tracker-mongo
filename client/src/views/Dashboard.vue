<template>
  <div class="dashboard" v-if="loading == false">
    <h1>Dashboard</h1>
    <div class="generate-url-container">
      <button
        @click="$router.push('/generate-url')"
        class="generate-url-button"
      >
        Generate URL
      </button>
      <p class="help-text">
        Generate a URL to send a form to a student to request information for
        their letters of recommendation.
      </p>
    </div>
    <!-- <h2>Upcoming Deadlines</h2>
    <alert-block
      v-if="upcomingDeadlines == null || upcomingDeadlines.length == 0"
      alertMessage="There are no upcoming deadlines at this time."
      variant="success"
    ></alert-block> -->
    <div class="pending-letters">
      <h2>Pending Requests</h2>
      <p class="help-text">
        These are the letters that you have sent to students that have not been
        completed yet.
      </p>
      <letter-component
        v-for="letter in pendingRequests"
        :key="letter._id"
        v-bind="letter"
      ></letter-component>

      <alert-block
        v-if="pendingRequests == null || pendingRequests.length == 0"
        alertMessage="There are no pending requests for student information at this time."
        variant="success"
      ></alert-block>
    </div>
    <div class="completed-letters">
      <h2>Student Completed Letters</h2>
      <p class="help-text">
        These are the requests that have been filled out by a student. Please
        write their letters of recommendation and then mark them as complete.
      </p>
      <letter-component
        v-for="letter in completedLetters"
        :key="letter._id"
        v-bind="letter"
      ></letter-component>
      <alert-block
        v-if="completedLetters == null || completedLetters.length == 0"
        alertMessage="There are no completed letters to view."
        variant="success"
      >
      </alert-block>
    </div>
  </div>
</template>

<script>
import AlertBlock from "../components/AlertBlock.vue";
import axios from "axios";
import LetterComponent from "../components/LetterComponent.vue";
import loadingState from "@/mixins/loadingState";
export default {
  mixins: [loadingState],
  components: {
    AlertBlock,
    LetterComponent,
  },
  data() {
    return {
      letters: [],
      upcomingDeadlines: null,
    };
  },
  computed: {
    pendingRequests: function () {
      let filter = this.letters.filter((letter) => {
        return letter.isPending == true && letter.markedAsSent == false;
      });
      if (filter) {
        return filter;
      }
      return null;
    },
    completedLetters: function () {
      let completed = this.letters.filter((letter) => {
        return letter.studentCompleted == true;
      });
      if (completed) {
        return completed;
      }
      return null;
    },
  },
  created: async function () {
    try {
      this.loading = true;
      await this.fetchLetters();
      this.loading = false;
    } catch (error) {
      this.loading = false;

      console.log(error);
    }
  },
  methods: {
    fetchLetters: async function () {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ` + this.$store.getters.getUserToken,
          },
        };
        let getLetters = await axios.get(
          process.env.VUE_APP_BASE_URL + "/api/letters",
          config
        );
        console.log(getLetters);
        this.letters = getLetters.data.letters;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.pending-letters {
  margin: 30px 0px;
}
.completed-letters {
  margin: 30px 0px;
}
.dashboard h1 {
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
  max-width: 300px;
}

.generate-url-form {
  margin: 0px auto;
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
.help-text {
  font-size: 10px;
  color: var(--primary-black-lightest);
  margin: 5px 0px;
}
</style>
