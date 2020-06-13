<template>
  <div class="home">
    <h1>Welcome to Bad Person beatterupper</h1>
    <create-enemy></create-enemy>
    <Enemy v-for="enemy in enemies" :key="enemy._id" :enemyData="enemyData"></Enemy>
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
      return this.$store.state.enemies;
    }
  },
  components: { CreateEnemy, Enemy }
};
</script>
