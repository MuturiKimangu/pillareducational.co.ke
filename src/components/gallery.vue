<template>
  <navbar />
  <div class="grid grid-cols-3 gap-4">
    <div v-for="image in images" :key="image.id" class="relative">
      <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
    </div>
  </div>
  <footer1 />
  <Hero />
</template>

<script>
import navbar from "./navbar.vue";
import footer1 from "./footer1.vue";
import Hero from "./hero.vue";

export default {
  data() {
    return {
      images: [
        { id: 1, src: "path/to/image1.jpg", alt: "Image 1 description" },
        { id: 2, src: "path/to/image2.jpg", alt: "Image 2 description" },
        { id: 3, src: "path/to/image3.jpg", alt: "Image 3 description" },
        // Add more images as needed
      ],
    };
  },
  components: {
    navbar,
    footer1,
    Hero,
  },
};
</script>
