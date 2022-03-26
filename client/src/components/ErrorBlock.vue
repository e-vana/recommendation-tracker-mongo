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
.error-block {
  color: var(--red);
  background-color: var(--red-lighter);
  padding: 20px;
  font-size: 12px;
  text-align: center;
  margin: 20px 0px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.075);

}

</style>