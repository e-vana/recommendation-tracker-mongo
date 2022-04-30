<template>
  <div class="generate-url-form">
    <h1>Generate a student invite</h1>
    <p class="help-text">
      Enter a students information below. Clicking "Send a request" will send a
      form to the corresponding student at the email listed below requesting
      more information for the letter of recommendation.
    </p>
    <div class="generate-url-form-container">
      <form @submit.prevent="submitLetterRequest">
        <label for="">Student First Name</label>
        <input v-model="studentInformation.firstName" type="text" required />
        <label for="">Student Last Name</label>
        <input v-model="studentInformation.lastName" type="text" required />
        <label for="">Student Email</label>
        <input v-model="studentInformation.email" type="text" required />
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
      studentInformation: {
        firstName: null,
        lastName: null,
        email: null,
      },
    };
  },
  methods: {
    submitLetterRequest: async function () {
      try {
        this.isLoading = true;
        this.isError = false;
        const config = {
          headers: {
            Authorization: `Bearer ` + this.$store.getters.getUserToken,
          },
        };
        let payload = {
          studentFirstName: this.studentInformation.firstName,
          studentLastName: this.studentInformation.lastName,
          studentEmail: this.studentInformation.email,
        };
        let trySubmitLetter = await axios.post(
          process.env.VUE_APP_BASE_URL + "/api/letters",
          payload,
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
