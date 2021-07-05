<template>
<div class="card_print">
  <img :src="link"  alt="view of the card" class="single_card">
</div>
</template>

<script>
export default {
  name: "CardPrint",
  props: {
    link: String
  }
}
</script>

<style scoped>
.card_print{
  border-radius: 10px;
  border: 2px solid grey;
  box-sizing: border-box;
  height: 355px;
  width: 254px;
}
.single_card{
  height: 351px;
  width: 250px;
  position: center;
}
</style>