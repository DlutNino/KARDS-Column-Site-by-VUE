<template>
  <div class="warp_back" @click="warp_back">返回上一级</div>
</template>

<script>
export default {
  name: "WarpBack",
  methods: {
    warp_back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.warp_back {
  width: 200px;
  height: 60px;
  font-size: 1.1em;
  font-weight: bold;
  color: white;
  background-color: #1c1c1c;
  border-radius: 6px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
}
</style>