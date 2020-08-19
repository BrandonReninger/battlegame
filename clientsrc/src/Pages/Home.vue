<template>
  <div class="home">
    <h1>Welcome to Bad Person beatterupper</h1>
    <div class="row">
      <Create-Enemy></Create-Enemy>
      <CreatePlayer></CreatePlayer>
    </div>
    <h2>Who do you want to fight?</h2>
    <div class="row">
      <Enemy v-for="enemy in enemies" :key="enemy._id" :enemyData="enemy"></Enemy>
    </div>
    <h2>Choose your player!</h2>
    <div class="row mt-3">
      <User v-for="user in users" :key="user._id" :userData="user"></User>
    </div>
    <div class="d-flex justify-content-center">
      <button
        class="btn btn-primary btn-lg mt-3"
        type="button"
        v-on="{ click: [selectEnemy, selectFighter]}"
      >FIGHT!</button>
    </div>
  </div>
</template>

<script>
import Enemy from "../components/Enemy";
import CreateEnemy from "../components/CreateEnemy";
import CreatePlayer from "../components/CreatePlayer";
import User from "../components/User";
export default {
  name: "home",
  props: ["userData"],
  mounted() {
    this.$store.dispatch("getEnemies");
    this.$store.dispatch("getUsers");
  },
  computed: {
    enemies() {
      console.log(this.$store.state.enemies);
      return this.$store.state.enemies;
    },
    users() {
      return this.$store.state.users;
    },
  },
  methods: {},
  components: { CreateEnemy, Enemy, CreatePlayer, User },
};
</script>
