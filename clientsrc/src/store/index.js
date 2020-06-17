import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router";

Vue.use(Vuex);

let baseUrl = location.host.includes("localhost") ?
  "http://localhost:3000/" :
  "/";

let api = Axios.create({
  baseURL: baseUrl + "api",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  state: {
    profile: {},
    enemies: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setEnemies(state, enemies) {
      state.enemies = enemies
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({
      commit
    }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },

    async getEnemies({
      commit
    }) {
      try {
        let res = await api.get('enemies');
        commit("setEnemies", res.data)
      } catch (error) {
        console.error(error)
      }
    },

    async createEnemy({
      dispatch
    }, newEnemy) {
      try {
        let res = await api.post('enemies', newEnemy)
        dispatch("getEnemies")
      } catch (error) {
        console.error(error)
      }
    }

  }
});