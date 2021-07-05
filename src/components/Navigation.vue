<template>
  <div class="navigation">
    <Title></Title>
    <Part name="卡牌分析" message="此分区中包括对单张卡牌的分析和对某一套路卡牌的分析对比"
          :option-list="[{ title: '过牌', des: 'extra_draw'}]"></Part>
    <Part name="卡组思路" message="此分区展示完整的构筑卡组"></Part>
    <Part name="专栏文章" message="此分区包括各类杂谈文章"></Part>
  </div>
</template>

<script>
import Title from "@/components/level2/Title";
import Part from "@/components/level2/Part";

export default {
  name: "Navigation",
  components: {
    Title,
    Part
  },
}
</script>

<style scoped>
.navigation{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1c1c1c;
}
</style>