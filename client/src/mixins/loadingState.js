const loadingState = {
  data(){
    return {
      loading: false,
    }
  },
  methods: {
    toggleLoading: function(){
      this.loading = !this.loading
    }
  }
}

export default loadingState;