const loadingState = {
  data(){
    return {
      loading: false,
      error: false,
      errorMessage: null
    }
  },
  methods: {
    toggleLoading: function(){
      this.loading = !this.loading
    }
  }
}

export default loadingState;