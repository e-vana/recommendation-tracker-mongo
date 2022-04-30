<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <div class="change-password-container">
      <h2>Change Password</h2>
      <label for="">Current Password</label>
      <input type="password" v-model="password" />
      <label for="">New Password</label>
      <input type="password" v-model="newPassword" />
      <button class="button-change-password" @click="changePassword">
        Change Password
      </button>
      <transition name="fade" mode="out-in">
        <alert-block
          v-if="error"
          :alertMessage="errorMessage"
          variant="error"
          :key="errorMessage"
        ></alert-block>
      </transition>

      <transition name="fade" mode="out-in">
        <alert-block
          v-if="success"
          :alertMessage="successMessage"
          variant="info"
          :key="successMessage"
        ></alert-block>
      </transition>
    </div>
  </div>
</template>

<script>
import loadingState from "@/mixins/loadingState";
import axios from "axios";
import AlertBlock from "../components/AlertBlock.vue";
// import ProfileLoader from '../components/ProfileLoader.vue';
export default {
  components: { AlertBlock },
  mixins: [loadingState],
  data() {
    return {
      password: null,
      newPassword: null,
      success: null,
      successMessage: null,
    };
  },
  methods: {
    changePassword: async function () {
      try {
        this.isLoading = true;
        this.isError = false;
        const config = {
          headers: {
            Authorization: `Bearer ` + this.$store.getters.getUserToken,
          },
        };
        let payload = {
          existingPassword: this.password,
          newPassword: this.newPassword,
        };
        let tryChangePassword = await axios.post(
          process.env.VUE_APP_BASE_URL + "/api/users/change-password",
          payload,
          config
        );
        if (tryChangePassword.data.success) {
          this.success = true;
          this.successMessage = "You have succesfully changed your password.";
          this.password = null;
          this.newPassword = null;
        }
      } catch (error) {
        this.isLoading = false;
        this.error = true;
        this.password = null;
        this.newPassword = null;
        this.errorMessage = error.response.data.error;
      }
    },
  },
};
</script>

<style>
.settings-container h1 {
  color: var(--primary-black);
  margin: 0px;
  font-weight: 200;
}
.settings-container h2 {
  color: var(--primary-black);
  margin: 0px;
  font-weight: 200;
}
.help-text {
  font-size: 12px;
  color: var(--primary-black-lightest);
  margin: 5px 0px;
}
.change-password-container {
  margin: 20px 0;
}
.button-change-password {
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
</style>
