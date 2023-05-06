<template>
  <navbar class="mx-auto w-4/5" />
  <div>
    <!-- Hero section -->
    <section class="text-center py-20 font-sans about-image bg-cover bg-center">
      <h1 class="text-4xl text-green-600 tracking-widest text-shadow-lg font-bold mb-4">
        PILLAR EDUCATIONAL
      </h1>
      <p class="text-xl">
        We are committed to providing the best solutions for our customers.
      </p>
    </section>

    <!-- Company description -->
    <section class="py-20 px-8 rounded-md shadow-2xl mx-auto w-4/5">
      <h2 class="text-3xl font-bold mb-4">Our Story</h2>
      <p class="text-lg leading-relaxed">
        Our company was founded with the goal of providing innovative and reliable
        solutions for businesses across various industries. We have a team of dedicated
        professionals with years of experience in delivering high-quality products and
        services.
      </p>
    </section>

    <!-- Gallery of images -->
    <section class="py-20 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <img
        src="https://via.placeholder.com/350x200"
        alt="Image 1"
        class="rounded-md shadow-md"
      />
      <img
        src="https://via.placeholder.com/350x200"
        alt="Image 2"
        class="rounded-md shadow-md"
      />
      <img
        src="https://via.placeholder.com/350x200"
        alt="Image 3"
        class="rounded-md shadow-md"
      />
      <img
        src="https://via.placeholder.com/350x200"
        alt="Image 4"
        class="rounded-md shadow-md"
      />
      <img
        src="https://via.placeholder.com/350x200"
        alt="Image 5"
        class="rounded-md shadow-md"
      />
      <img
        src="https://via.placeholder.com/350x200"
        alt="Image 6"
        class="rounded-md shadow-md"
      />
    </section>
  </div>
</template>

<script>
import navbar from "./navbar.vue";
export default {
  name: "About",
  components: { navbar },
};
</script>
