<template>
  <section
    class="font-sans mx-auto bg-white py-8 flex flex-row drop-shadow-2xl rounded-xl sm:px-3"
  >
    <div
      class="container mx-auto md:flex items-center flex-wrap pt-4 pb-2 block md:w-1/2"
    >
      <h1
        class="w-full text-2xl font-bold tracking-wide leading-tight text-center text-gray-800"
      >
        About Us
      </h1>
      <div class="w-full sm:mb-2">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <p class="text-gray-600 text-center w-full">
        We are a team of passionate developers, designers, and problem-solvers committed
        to delivering the best software solutions
      </p>

      <router-link
        to="/about"
        class="text-gray-800 hover:text-green-800 mx-auto tracking-widest"
        >...See More
      </router-link>
    </div>
    <div class="w-1/2 h-full my-auto md:block hidden">
      <img class="rounded-lg" src="../assets/hero-image.jpg" alt="" srcset="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutmini",
};
</script>
