<template>
  <div class="navi_option">
    <router-link :to= "'/' + destination" class="navi_link">{{ name }}</router-link>
  </div>
</template>

<script>
export default {
  name: "NaviOption",
  props: {
    name: String,
    destination: String
  }
}
</script>

<style scoped>
.navi_option{
  height: 60px;
  width: 200px;
  text-align: center;
  line-height: 60px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  background-color: #1c1c1c;
}
.navi_link{
  text-decoration: none;
  color: white;
}
</style>