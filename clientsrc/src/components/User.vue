<template>
  <div class="user" @click="selectFighter()">
    <div class="col-4">
      <h1 class="text-center">{{userData.name}}</h1>
      <img :src="userData.image" class="img-fluid" />
      <h3>{{userData.name}}: {{userData.hp}}</h3>
    </div>
    <!-- <button class="btn btn-warning" @click="deletePlayer(userData.id)">DELETE</button> -->
  </div>
</template>


<script>
export default {
  name: "user",
  props: ["userData"],
  data() {
    return {};
  },
  computed: {
    fighter() {
      return this.$store.state.activeUser;
    },
  },
  methods: {
    // deletePlayer() {
    //   // console.log(userData);
    //   if (confirm("Are you sure you want to delete?"))
    //     this.$store.dispatch("deletePlayer", this.userData.id);
    // },
    selectFighter() {
      this.$store.dispatch("selectFighter", this.userData._id);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>