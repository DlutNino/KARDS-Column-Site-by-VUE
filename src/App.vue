<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    Navigation,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
body{
  background-image:url('assets/Bismarck.jpg');
  background-position: center;
  background-attachment:fixed;
  background-size: 100%;
}
a:visited{
  color: white;
}
</style>
