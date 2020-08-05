<template>
  <div class="battle">
    <div class="row justify-content-center">
      <div class="col-4">
        <h1 class="text-center">{{enemy.name}}</h1>
        <img :src="enemy.imgUrl" class="img-fluid" />
        <h3>{{enemy.name}} used a move</h3>
        <h3>{{enemy.name}}: {{enemy.hp}}</h3>
        <div class="d-flex justify-content-around border">
          <button class="btn btn-warning" @click="punch()">Punch</button>
          <button class="btn btn-warning" @click="kick()">Kick</button>
          <button class="btn btn-warning" @click="slap()">Slap</button>
        </div>
      </div>
      <div class="col-2">
        <h2>VS</h2>
      </div>
      <h3>Choose your fighter</h3>
      <user v-for="user in users" :key="user._id" :userData="user"></user>
    </div>
  </div>
</template>


<script>
import User from "../components/User.vue";
export default {
  name: "battle",
  props: ["userData"],
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("getUsers");
  },

  computed: {
    enemy() {
      console.log("battle", this.$store.state.activeEnemy);
      return this.$store.state.activeEnemy;
    },
    users() {
      console.log("users", this.$store.state.users);
      return this.$store.state.users;
    },
    // profile() {
    //   return this.$store.state.profile;
    // }
  },
  methods: {
    computerChoice() {
      let enemyMove = Math.random();
      if (enemyMove < 0.34) {
        this.enemy.move1;
      } else if (enemyMove < 0.67) {
        this.enemy.move2;
      } else {
        this.enemy.move3;
      }
    },

    punch() {
      this.computerChoice();
      if (this.computerChoice == this.enemy.move1) {
        user.hp--;
      } else if (this.computerChoice == this.enemy.move2) {
        user.hp -= 5;
      } else if (this.computerChoice == this.enemy.move3) {
        user.hp -= 10;
      }
      this.enemy.hp -= 5;
      this.$store.dispatch("incrementEnemyHp", this.enemy);
    },

    kick() {
      this.computerChoice();
      if (this.computerChoice == this.enemy.move1) {
        user.hp--;
      } else if (this.computerChoice == this.enemy.move2) {
        user.hp -= 5;
      } else if (this.computerChoice == this.enemy.move3) {
        user.hp -= 10;
      }
      this.enemy.hp -= 10;
      this.$store.dispatch("incrementEnemyHp", this.enemy);
    },

    slap() {
      this.computerChoice();
      if (this.computerChoice == this.enemy.move1) {
        user.hp--;
      } else if (this.computerChoice == this.enemy.move2) {
        user.hp -= 5;
      } else if (this.computerChoice == this.enemy.move3) {
        user.hp -= 10;
      }
      this.enemy.hp -= 20;
      this.$store.dispatch("incrementEnemyHp", this.enemy);
    },
  },
  components: { User },
};
</script>


<style scoped>
</style>