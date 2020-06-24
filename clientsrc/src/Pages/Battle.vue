<template>
  <div class="battle">
    <div class="row justify-content-center">
      <div class="col-4">
        <h1 class="text-center">{{enemy.name}}</h1>
        <img :src="enemy.imgUrl" class="img-fluid" />
        <h3>{{enemy.name}} used a move</h3>
        <div class="d-flex justify-content-around border">
          <button class="btn btn-warning" @click="punch()">Punch</button>
          <button class="btn btn-warning" @click="kick()">Kick</button>
          <button class="btn btn-warning" @click="slap()">Slap</button>
        </div>
      </div>
    </div>
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
  methods: {
    computerChoice() {
      let enemyMove = Math.random();
      if (enemyMove < 0.34) {
        enemy.move1;
      } else if (enemyMove < 0.67) {
        enemy.move2;
      } else {
        enemy.move3;
      }
    },

    punch() {
      computerChoice();
      if (computerChoice == move1) {
        user.hp--;
      } else if (computerChoice == move2) {
        user.hp -= 5;
      } else if (computerChoice == move3) {
        user.hp -= 10;
      }
      enemy.hp -= 5;
      this.$store.dispatch("incrementEnemyHp", this.enemy);
    },

    kick() {
      computerChoice();
      if (computerChoice == move1) {
        user.hp--;
      } else if (computerChoice == move2) {
        user.hp -= 5;
      } else if (computerChoice == move3) {
        user.hp -= 10;
      }
      enemy.hp -= 10;
    },

    slap() {
      computerChoice();
      if (computerChoice == move1) {
        user.hp--;
      } else if (computerChoice == move2) {
        user.hp -= 5;
      } else if (computerChoice == move3) {
        user.hp -= 10;
      }
      enemy.hp -= 20;
    }
  },
  components: {}
};
</script>


<style scoped>
</style>