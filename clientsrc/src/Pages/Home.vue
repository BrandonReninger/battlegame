<template>
  <div class="home">
    <h1>Welcome to Bad Person beatterupper</h1>
    <create-enemy></create-enemy>
  </div>
</template>

<script>
import CreateEnemy from "../components/CreateEnemy";
export default {
  name: "home",
  computed: {
    enemy() {
      return this.$store.state.enemies;
    }
  },
  components: { CreateEnemy }
};
</script>
