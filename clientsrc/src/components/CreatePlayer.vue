<template>
  <div class="createPlayer">
    <h3>Who you are</h3>
    <form @submit.prevent="createPlayer()">
      <div class="form-group">
        <label for="name">Enter Name:</label>
        <input
          type="text"
          name="name"
          placeholder="enter name..."
          v-model="newPlayer.name"
          required
        />
      </div>
      <div class="form-group">
        <label for="name">Image URL</label>
        <input
          type="text"
          name="name"
          placeholder="paste image url..."
          v-model="newPlayer.image"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit">Create</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "createPlayer",
  data() {
    return {
      newPlayer: {}
    };
  },
  computed: {},
  methods: {
    createPlayer() {
      this.$store.dispatch("createPlayer", this.newPlayer);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>