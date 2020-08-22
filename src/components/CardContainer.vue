<template>
  <div class="card_container">
    <Card
      v-for="product in products"
      :product="product"
      :disabled="!product.available"
      :key="product.name + product.mass"
    />
  </div>
</template>

<script>
import Card from './Card'

export default {
  name: 'CardContainer',
  props: {
    products: Array
  },
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.card_container {
  display: flex;
  width: max-content;
  max-width: 90vw;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  opacity: 0.99;
}
</style>
