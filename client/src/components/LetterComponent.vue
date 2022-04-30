<template>
  <router-link :to="`/letter/${_id}`">
    <div class="letter-table-entry">
      <div class="student-name">
        {{ studentFirstName }} {{ studentLastName }}
      </div>
      <div class="student-email">{{ studentEmail }}</div>
      <div class="send-date">
        <i><b>Sent On:</b> {{ dateTransform }}</i>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  computed: {
    dateTransform: function () {
      let date = new Date(this.createdAt).toUTCString();
      return date;
    },
  },
  props: {
    _id: String,
    isPending: Boolean,
    studentEmail: String,
    studentFirstName: String,
    studentLastName: String,
    markedAsSent: Boolean,
    createdAt: String,
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
.letter-table-entry {
  width: 100%;
  display: flex;
  align-items: center;
  /* outline: 1px solid rgba(0, 0, 0, 0.116); */
  padding: 5px;
  margin: 10px 0px;
  border: 1px solid rgb(245, 245, 245);
}
.letter-table-entry:hover {
  background-color: rgb(241, 241, 241);
  cursor: pointer;
}
.student-name {
  width: 200px;
  font-weight: bold;
}
.student-email {
  width: 250px;
}
</style>
