<template>
  <div class="container">
    <div class="card_analyze">
      <CardPrint :link = "img_link" class="left_in_analyze"></CardPrint>
      <AnalyzeText class="right_in_analyze" :text="text_content"></AnalyzeText>
    </div>
    <WarpBack></WarpBack>
  </div>
</template>

<script>
import CardPrint from "@/components/level2/CardPrint";
import AnalyzeText from "@/components/level2/AnalyzeText";
import WarpBack from "@/components/WarpBack";

export default {
  name: "CardAnalyze",
  components: {
    CardPrint,
    AnalyzeText,
    WarpBack
  },
  props: {
    img_link: String,
    text_content: String
  },
  data(){
    return {

    }
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
.card_analyze{
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 400px;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 24px;
}
.left_in_analyze{
  margin-left: 15%;
  margin-right: 10%;
  margin-top: 12px;
}
.right_in_analyze{
  margin-right: 10%;
}
</style>