<template>
  <div class="profile-container">
    <div class="profile-block-left">
      <b>{{ profileName }}</b>
      <br />
      {{ fullnameTitle }}
      <br />
      {{ school }}
      <br />
      {{ course }}
    </div>
    <div class="profile-block-right">
      <button class="button-delete" @click="tryDelete">Delete</button>
      <button class="button-edit">Edit</button>
    </div>
  </div>
</template>

<script>
import loadingState from "@/mixins/loadingState";
import axios from "axios";
export default {
  mixins: [loadingState],
  props: {
    profileId: String,
    profileName: String,
    fullnameTitle: String,
    school: String,
    course: String,
  },
  methods: {
    deleteProfile: async function () {
      try {
        this.isLoading = true;
        const config = {
          headers: {
            Authorization: `Bearer ` + this.$store.getters.token,
          },
        };
        let tryDelete = await axios.post(
          process.env.VUE_APP_BASE_URL + "/api/users/login",
          config
        );
        console.log(tryDelete);
      } catch (error) {
        this.isLoading = false;

        console.log(error);
      }
    },
  },
};
</script>

<style>
.profile-container {
  border: 1px solid rgb(231, 231, 231);
  border-radius: 5px;
  color: var(--primary-black);
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  display: flex;
  margin: 10px 0px;
}
.button-delete {
  border: none;
  border-radius: 5px;
  background-color: var(--red-lighter);
  color: var(--red);
  padding: 10px 30px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  cursor: pointer;
}
.button-edit {
  border: none;
  border-radius: 5px;
  background-color: var(--alert-secondary);
  color: var(--alert-primary);
  padding: 10px 30px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  cursor: pointer;
  margin-left: 20px;
}
</style>
