<template>
  <div class="Enemy col-3" @click="selectEnemy()">
    <div class="card" style="width: 18rem;">
      <img :src="enemyData.imgUrl" class="card-img-top img-fluid" alt="..." />
      <div class="card-body">
        <h1>{{enemyData.name}}</h1>
        <div class="card-header">
          <p>Attack 1: {{enemyData.move1}}</p>
          <p>Attack 2: {{enemyData.move2}}</p>
          <p>Attack 3: {{enemyData.move3}}</p>
        </div>
      </div>
      <button class="btn btn-warning" @click="deleteEnemy(enemyData.id)">DELETE</button>
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
  methods: {
    deleteEnemy(id) {
      this.$store.dispatch("deleteEnemy", this.enemyData.id);
    },

    selectEnemy() {
      // this.$store.commit("setActiveEnemy");
      this.$store.dispatch("battle");
      this.$router.push({
        name: "battle",
        params: { enemyId: this.enemyData.id }
      });
    }
  },
  components: {}
};
</script>


<style scoped>
</style>