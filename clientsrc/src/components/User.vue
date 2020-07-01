<template>
  <div class="user">
    <div class="col-4">
      <div class="card" style="width: 18rem;">
        <img :src="userData.img" class="card-img-top img-fluid" alt />
        <div class="card-body">
          <h1>{{userData.name}}</h1>
        </div>
      </div>
    </div>
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
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>