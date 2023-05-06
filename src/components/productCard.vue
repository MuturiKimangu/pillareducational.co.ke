<!-- Product-card.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <img
      :src="product.image"
      alt="Product Image"
      class="w-full h-64 object-cover rounded-md"
    />
    <h3 class="text-xl font-bold mt-4">{{ product.title }}</h3>
    <p class="text-gray-600 mt-2">{{ product.description }}</p>
    <div class="mt-4 flex justify-between items-center">
      <span class="text-lg font-bold">{{ product.price }}</span>
      <button class="bg-blue-500 text-white px-4 py-2 rounded-md">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      products: [
        {
          title: "Product 1",
          description: "Product 1 description",
          image: "https://via.placeholder.com/300",
          price: "\$10",
        },
        {
          title: "Product 1",
          description: "Product 1 description",
          image: "https://via.placeholder.com/300",
          price: "\$10",
        },
        {
          title: "Product 1",
          description: "Product 1 description",
          image: "https://via.placeholder.com/300",
          price: "\$10",
        },
        {
          title: "Product 1",
          description: "Product 1 description",
          image: "https://via.placeholder.com/300",
          price: "\$10",
        },
        {
          title: "Product 1",
          description: "Product 1 description",
          image: "https://via.placeholder.com/300",
          price: "\$10",
        },
        // Add more products here
      ],
    };
  },
};
</script>
