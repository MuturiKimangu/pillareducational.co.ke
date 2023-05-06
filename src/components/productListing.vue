<template>
  <div class="product-list">
    <h1>Product List</h1>
    <productCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import productCard from "./productCard.vue";

export default {
  name: "ProductList",
  components: {
    productCard,
  },
  data() {
    return {
      products: [
        { id: 1, name: "Product 1", description: "This is product 1", price: 19.99 },
        { id: 2, name: "Product 2", description: "This is product 2", price: 29.99 },
        { id: 3, name: "Product 3", description: "This is product 3", price: 39.99 },
      ],
    };
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
