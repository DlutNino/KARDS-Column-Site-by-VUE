<template>
  <div class="container">
    <div class="part_menu">
      <router-link class="menu_link" v-for="item in link_list"
                   :key="item.id" :to="'/' + item.router_link"><p>{{item.title}}</p></router-link>
    </div>
    <WarpBack></WarpBack>
  </div>
</template>

<script>
import WarpBack from "@/components/WarpBack";
export default {
  name: "PartMenu",
  components: {
    WarpBack
  },
  props: {
    link_list: Array,
  },
  data(){
    return {

    }
  },
  created() {

  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.part_menu{
  width: 50%;
  margin: 60px 25% 24px 25%;
  height: 400px;
  border-radius: 6px;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  z-index: 0;
  //justify-content: space-around;
  //align-items: center;
}
.menu_link{
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.2em;
  flex: 1 1 33.3%;
}
</style>