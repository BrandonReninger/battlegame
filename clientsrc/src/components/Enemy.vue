<template>
  <div class="Enemy">
    <div class="col-3 pointer" @click="selectEnemy()">
      <div class="card border" style="width: 18rem;">
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
      // console.log("deleteEnemy", this.enemyData.id);
      this.$store.dispatch("deleteEnemy", this.enemyData._id);
    },

    selectEnemy() {
      this.$store.dispatch("battle", this.enemyData.id);
      NOTE; //when selectEnemy and selectFighter have both been triggered then route to battle needs to initiate
      if (selectEnemy() && selectFighter()) {
        this.$router.push({
          name: "battle",
          params: { enemyId: this.enemyData.id, userId: this.userData.id },
        });
      }
    },
  },
  components: {},
};
</script>


<style scoped>
.pointer {
  cursor: pointer;
}
</style>