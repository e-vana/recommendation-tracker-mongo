<template>
  <div class="error-block">
    {{errorMessage}}
  </div>
</template>

<script>
export default {
  name: 'ErrorBlock',
  props: {
    errorMessage: String
  }
}
</script>

<style>
/* .error-block {
  color: var(--red);
  background-color: var(--red-lighter);
  padding: 20px;
  font-size: 12px;
  text-align: center;
  margin: 20px 0px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);

} */

.error-block {
  margin: 20px 0px;
  color: var(--red);
  background-color: var(--red-lighter);
  font-size: 12px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);
  border-left: 5px solid var(--red);
  padding: 5px;
}

</style>