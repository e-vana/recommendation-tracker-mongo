<template>
  <div class="alert-block" :style="variantMapper">
    {{ alertMessage }}
  </div>
</template>

<script>
export default {
  name: "AlertBlock",
  props: {
    alertMessage: String,
    variant: String,
  },
  computed: {
    variantMapper: function () {
      if (this.variant == "error") {
        return {
          "--alert-primary": "#a03535",
          "--alert-secondary": "#fcdfdf",
        };
      }
      if (this.variant == "success") {
        return {
          "--alert-primary": "#1F832F",
          "--alert-secondary": "#A3FBB1",
        };
      }
      if (this.variant == "info") {
        return {
          "--alert-primary": "#151c7e",
          "--alert-secondary": "#c5d6ec",
        };
      } else {
        return {
          "--alert-primary": "#151c7e",
          "--alert-secondary": "#c5d6ec",
        };
      }
    },
  },
};
</script>

<style>
.alert-block {
  margin: 20px 0px;
  color: var(--alert-primary);
  background-color: var(--alert-secondary);
  font-size: 12px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  border-left: 5px solid var(--alert-primary);
  padding: 10px;
}
</style>
