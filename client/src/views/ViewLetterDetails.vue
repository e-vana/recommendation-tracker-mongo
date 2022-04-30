<template>
  <div>
    <h1>Student Letter Information</h1>
    <p class="help-text">
      Reminder that this letter may not be completed yet. If the fields have
      been populated by a student they will show up here.
    </p>
    <!-- {{ letterData }} -->
    <h2>{{ letterData.studentFirstName }} {{ letterData.studentLastName }}</h2>

    <div class="info-container">
      <label for="">Email</label>
      <p>{{ letterData.studentEmail }}</p>
    </div>
    <div class="info-container" v-if="letterData.studentLetterSchool">
      <label for="">School</label>

      <p>{{ letterData.studentLetterSchool }}</p>
    </div>
    <div class="info-container" v-if="letterData.studentLetterProgram">
      <label for="">Program</label>
      <p>{{ letterData.studentLetterProgram }}</p>
    </div>

    <div
      class="info-container"
      v-if="letterData.studentLetterSubmissionDueDate"
    >
      <label for="">Due Date</label>
      <p>{{ sanitizeDate }}</p>
    </div>
    <div class="info-container" v-if="letterData.studentLetterNotes">
      <label for="">Notes</label>
      <p>{{ letterData.studentLetterNotes }}</p>
    </div>
    <button v-if="showMarkAsSent">THIS IS COMPLETE</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      letterData: {},
    };
  },
  created: async function () {
    try {
      await this.fetchLetter();
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    sanitizeDate() {
      let date = new Date(
        this.letterData.studentLetterSubmissionDueDate
      ).toLocaleString();
      return date;
    },
  },
  methods: {
    fetchLetter: async function () {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ` + this.$store.getters.getUserToken,
          },
        };
        let getLetter = await axios.get(
          process.env.VUE_APP_BASE_URL +
            `/api/letters/${this.$route.params.letterId}`,
          config
        );
        this.letterData = getLetter.data.letter;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.info-container {
  border: 1px solid rgb(219, 219, 219);
  padding: 10px;
  margin: 20px 0px;
  border-radius: 10px;
}
.help-text {
  font-size: 12px;
  color: var(--primary-black-lightest);
  margin: 5px 0px;
}
</style>
