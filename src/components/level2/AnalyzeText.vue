<template>
<div class="analyze_text">
  {{text}}
</div>
</template>

<script>
export default {
  name: "AnalyzeText",
  props: {
    text: String
  },
}
</script>

<style scoped>
.analyze_text{
  padding: 24px 30px;
  background-color: #1c1c1c;
  color: white;
  border-radius: 5px;
  box-sizing: border-box;
  width: 600px;
  height: 380px;
  text-align: justify;
  text-justify: newspaper;
  white-space: normal;
  word-break: break-all;
}
</style>