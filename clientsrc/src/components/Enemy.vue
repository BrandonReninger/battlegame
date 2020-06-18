<template>
  <div class="Enemy">
    <div class="card" style="width: 18rem;">
      <img :src="enemyData.imgUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1>{{enemyData.name}}</h1>
        <div class="card-header">
          <p>{{enemyData.move1}}</p>
          <p>{{enemyData.move2}}</p>
          <p>{{enemyData.move3}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Enemy",
  props: ["enemyData"],
  data() {
    return {};
  },
  computed: {
    // enemy() {
    //   this.$store.state.enemies;
    // }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>