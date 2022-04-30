<template>
  <div class="generate-url-form">
    <h1>Complete this request for information</h1>
    <p class="help-text">
      Your professor has sent you a request for more information so they can
      complete your letter of recommendation. Please fill out all of the
      following information as accurately as possible and your professor will be
      alerted to complete the letter for you.
    </p>
    <div class="generate-url-form-container">
      <form @submit.prevent="submitLetter">
        <label for="">Student First Name</label>
        <input
          v-model="studentInformation.studentFirstName"
          type="text"
          required
        />
        <label for="">Student Last Name</label>
        <input
          v-model="studentInformation.studentLastName"
          type="text"
          required
        />
        <label for="">Student Email</label>
        <input v-model="studentInformation.studentEmail" type="text" required />
        <label for="">Prospective School</label>
        <input
          v-model="studentInformation.studentLetterSchool"
          type="text"
          required
        />
        <label for="">Prospective Program</label>
        <input
          v-model="studentInformation.studentLetterProgram"
          type="text"
          required
        />
        <label for="">Letter Notes</label>
        <input
          v-model="studentInformation.studentLetterNotes"
          type="text"
          required
        />
        <label for="">Letter Due Date</label>

        <input
          type="date"
          v-model="studentInformation.studentLetterSubmissionDueDate"
          required
        />
        <button type="submit" class="button-send">Send a Request</button>
      </form>
    </div>
  </div>
</template>

<script>
import loadingState from "@/mixins/loadingState";
import axios from "axios";
export default {
  mixins: [loadingState],
  data() {
    return {
      studentInformation: {},
    };
  },
  created: async function () {
    try {
      await this.fetchLetter();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    fetchLetter: async function () {
      try {
        this.isLoading = true;
        this.isError = false;
        console.log("fired fetch letter");

        let getLetter = await axios.get(
          process.env.VUE_APP_BASE_URL +
            `/api/letters/${this.$route.params.letterId}`
        );
        this.studentInformation = getLetter.data.letter;
        console.log(getLetter);
      } catch (error) {
        this.isLoading = false;
        this.error = true;
        this.errorMessage = error.response.data.error;
      }
    },
    submitLetter: async function () {
      try {
        this.isLoading = true;
        this.isError = false;
        const config = {
          headers: {
            Authorization: `Bearer ` + this.$store.getters.getUserToken,
          },
        };
        let trySubmitLetter = await axios.post(
          process.env.VUE_APP_BASE_URL +
            `/api/letters/update-letter-information/${this.$route.params.letterId}`,
          this.studentInformation,
          config
        );
        if (trySubmitLetter.data.success) {
          this.$router.push("/dashboard");
        }
        console.log(trySubmitLetter);
      } catch (error) {
        this.isLoading = false;
        this.error = true;
        this.errorMessage = error.response.data.error;
      }
    },
  },
};
</script>

<style>
.generate-url-form-container {
  margin: 20px 0px;
}
.generate-url-form h1 {
  color: var(--primary-black);
  margin: 0px;
  font-weight: 200;
}
.generate-url-form h2 {
  color: var(--primary-black);
  margin: 0px;
  font-weight: 200;
}
.help-text {
  font-size: 12px;
  color: var(--primary-black-lightest);
  margin: 5px 0px;
}
.generate-url-form {
  max-width: 500px;
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
  box-sizing: border-box;
}

.button-send {
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
  /* margin-left: 20px; */
}
</style>
