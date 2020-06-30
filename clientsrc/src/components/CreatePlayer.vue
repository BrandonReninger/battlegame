<template>
  <div class="createPlayer">
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
    </form>
  </div>
</template>


<script>
export default {
  name: "createPlayer",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>