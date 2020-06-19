<template>
  <div class="battle">
    <h1>{{enemy.name}}</h1>
    <img :src="enemy.imgUrl" class="image-fluid" />
  </div>
</template>


<script>
export default {
  name: "battle",
  data() {
    return {};
  },
  computed: {
    enemy() {
      console.log("battle", this.$store.state.activeEnemy);
      return this.$store.state.activeEnemy;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>