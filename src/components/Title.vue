<template>
  <h1 class="title">Ты сегодня покормил кота?</h1>
</template>

<script>
export default {
  name: 'Title'
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Exo2.0-Thin";
  src: url("../assets/Exo2.0-Thin.eot") format("embedded-opentype"),
  url("../assets/Exo2.0-Thin.otf");
}
.title {
  text-shadow: 0 1px 1px;
  color: white;
  font-family: "Exo2.0-Thin";
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.99;
}
</style>
