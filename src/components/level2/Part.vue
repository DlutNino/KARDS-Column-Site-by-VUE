<template>
  <div class="part" :title="message" @mouseover="view_options()" @mouseout="hide_options()">
    <p>{{ name }}</p>
    <NaviOption v-for="item in optionList" :key="item.id" v-show="vision" :name="item.title" :destination="item.des"></NaviOption>
  </div>
</template>

<script>
import NaviOption from "@/components/level2/NaviOption";
export default {
  name: "Part",
  components: {
    NaviOption
  },
  props: {
    name: String,
    message: String,
    optionList: Array
  },
  data() {
    return {
      vision: false
    }
  },
  methods: {
    view_options(){
      this.vision = true;
    },
    hide_options(){
      this.vision = false;
    }
   },
  created() {
    this.vision = false;
  }
}
</script>

<style scoped>
.part{
  height: 60px;
  width: 200px;
  text-align: center;
  //line-height: 60px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}
</style>