<template>
  <div class="container">
    <div class="deck">
      <h2 class="deck_name">{{title}}</h2>
      <h3 class="card_in_deck">Main Power:  </h3>
      <p v-for="item in cards" :key="item.id" class="card_in_deck">{{item.num}}x ({{item.kredit}}k) {{item.name}}</p>
      <h3 class="card_in_deck">Ally Power:  </h3>
      <p v-for="item in cards_ally" :key="item.id" class="card_in_deck">{{item.num}}x ({{item.kredit}}k) {{item.name}}</p>
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
    title: String,
    cards: Array,
    cards_ally: Array,
  }
}
</script>

<style scoped>
.deck {
  width: 60%;
  margin: 60px 20% 24px 20%;
  padding: 0 20px 20px 20px;
  border-radius: 6px;
  background-color: #1c1c1c;
  display: flex;
  flex-wrap: wrap;
  color: white;
}
.deck_name{
  flex: 1 1 100%;
}
.card_in_deck{
  font-weight: bold;
  font-size: 1.1em;
  flex: 1 1 25%;
}
</style>