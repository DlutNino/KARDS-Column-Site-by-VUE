<template>
  <div class="container">
    <div class="deck">

    </div>
    <WarpBack></WarpBack>
  </div>
</template>

<script>
import WarpBack from "@/components/WarpBack";
export default {
  name: "Deck",
  components: {
    WarpBack
  },
  props: {

  }
}
</script>

<style scoped>
.deck {
  width: 60%;
  height: 600px;
  margin: 60px 20% 24px 20%;
  border-radius: 6px;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  color: white;
}
</style>