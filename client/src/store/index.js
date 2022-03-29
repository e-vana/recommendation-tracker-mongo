import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    userToken: null
  },
  mutations: {
    SET_LOGIN: (state, payload) => {
      state.isLoggedIn = payload;
    },
    SET_TOKEN: (state, payload) => {
      state.userToken = payload;
    }
  },
  actions: {
    login: (context) => {
      context.commit("SET_LOGIN", true);
    },
    logout: (context) => {
      context.commit("SET_LOGIN", false)
    },
    setToken: (context, token) => {
      context.commit("SET_TOKEN", token);
    }
  },
  modules: {
  }
})
