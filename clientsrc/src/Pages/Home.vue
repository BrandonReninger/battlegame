<template>
  <div class="home">
    <h1>Welcome to Bad Person beatterupper</h1>
    <create-enemy></create-enemy>
    <h2>Who do you want to fight?</h2>
    <div class="row">
      <Enemy v-for="enemy in enemies" :key="enemy._id" :enemyData="enemy"></Enemy>
    </div>
  </div>
</template>

<script>
import Enemy from "../components/Enemy";
import CreateEnemy from "../components/CreateEnemy";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getEnemies");
  },
  computed: {
    enemies() {
      console.log(this.$store.state.enemies);
      return this.$store.state.enemies;
    }
  },
  components: { CreateEnemy, Enemy }
};
</script>
