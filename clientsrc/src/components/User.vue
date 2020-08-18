<template>
  <div class="user">
    <div class="col-3 pointer" @click="selectFighter()">
      <div class="card border" style="width: 18rem">
        <img :src="userData.image" class="img-fluid" />
        <div class="card-body">
          <h1 class="text-center">{{userData.name}}</h1>
        </div>
        <h3>{{userData.name}}: {{userData.hp}}</h3>
      </div>
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
    selectFighter() {
      this.$store.dispatch("selectFighter", this.userData._id);
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