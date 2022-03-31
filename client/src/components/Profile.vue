<template>
  <div class="profile-container">
    <div class="profile-block-left">
      <b>{{profileName}}</b>
      <br>
      {{fullnameTitle}}
      <br>
      {{school}}
      <br>
      {{course}}
      </div>
    <div class="profile-block-right">
      <button class="button-delete">Delete</button>
      <button class="button-edit">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
          profileId: String,
          profileName: String,
          fullnameTitle: String,
          school: String,
          course: String
  }
}
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