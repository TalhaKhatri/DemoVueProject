import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authenticated: false
  },
  mutations: {
    authenticate: state => (state.authenticated = true),
    unauthenticate: state => (state.authenticated = false)
  }
});

export default store;
