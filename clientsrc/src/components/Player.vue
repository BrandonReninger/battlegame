<template>
  <div class="player">
    <div class="col-4">
      <div class="card" style="width: 18rem;">
        <img :src="playerData.img" class="card-img-top img-fluid" alt />
        <div class="card-body">
          <h1>{{playerData.name}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "player",
  props: ["playerData"],
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