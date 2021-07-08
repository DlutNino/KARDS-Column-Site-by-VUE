<template>
  <div class="container">
    <div class="article">
      <h2 class="article_title">{{title}}</h2>
      <h3 class="article_author">{{author}}</h3>
      <p v-for="item in content" :key="item.id">{{item.text}}</p>
    </div>
    <WarpBack></WarpBack>
  </div>
</template>

<script>
import WarpBack from "@/components/WarpBack";
export default {
  name: "Article",
  components: {
    WarpBack,
  },
  props: {
    title: String,
    author: String,
    content: Array,
  }
}
</script>

<style scoped>
.article{
  width: 60%;
  //height: 600px;
  margin: 60px 20% 24px 20%;
  padding: 0 24px 20px 24px;
  border-radius: 6px;
  background-color: #1c1c1c;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
}

</style>