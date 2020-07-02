<template>
  <div class="user">
    <div class="col-4">
      <h1 class="text-center">{{userData.name}}</h1>
      <img :src="userData.image" class="img-fluid" />
      <h3>{{userData.name}}: {{userData.hp}}</h3>
    </div>
    <button class="btn btn-warning" @click="deletePlayer(userData.id)">DELETE</button>
  </div>
</template>


<script>
export default {
  name: "user",
  props: ["userData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deletePlayer(playerId) {
      console.log(userData);
      this.$store.dispatch("deletePlayer", playerId);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>