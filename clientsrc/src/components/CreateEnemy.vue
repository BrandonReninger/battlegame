<template>
  <div class="createEnemy row justify-content-center">
    <div class="col-6">
      <form @submit.prevent="createEnemy()">
        <div class="form-group">
          <label for="name">Enter Name:</label>
          <input
            type="text"
            name="name"
            placeholder="enter name..."
            v-model="newEnemy.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="move">Attack 1:</label>
          <input
            type="text"
            name="move"
            placeholder="enter attack name..."
            v-model="newEnemy.move"
            required
          />
        </div>
        <div class="form-group">
          <label for="move">Attack 2:</label>
          <input
            type="text"
            name="move"
            placeholder="enter attack name..."
            v-model="newEnemy.move"
            required
          />
        </div>
        <div class="form-group">
          <label for="move">Attack 3:</label>
          <input
            type="text"
            name="move"
            placeholder="enter attack name..."
            v-model="newEnemy.move"
            required
          />
        </div>
        <div class="form-group">
          <label for="imgUrl">Img URL:</label>
          <input
            type="text"
            name="imgUrl"
            placeholder="paste image url..."
            v-model="newEnemy.eimgUrl"
            required
          />
        </div>
        <button class="btn btn-primary" type="submit">Create</button>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "createEnemy",
  data() {
    return {
      newEnemy: {}
    };
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>