<template>
    <div class="lds-ring" :style="cssProp"><div ></div><div></div><div></div><div></div></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '000'
    },
    size: Number,
    thickness: Number
  },
  computed: {
    cssProp: function(){
      return {
        '--spinner-color': '#' + this.color,
        '--spinner-size': this.size + 'px',
        '--spinner-thickness': this.thickness + 'px'
      }
    }
  }
}
</script>

<style>
.lds-ring {
  display: inline-block;
  position: relative;
  width: var(--spinner-size);
  height: var(--spinner-size);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: var(--spinner-size);
  height: var(--spinner-size);
  border: var(--spinner-thickness) solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: var(--spinner-color) transparent transparent transparent;

}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


</style>