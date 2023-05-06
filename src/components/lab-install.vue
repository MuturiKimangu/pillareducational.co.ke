<template>
  <navbar class="mx-auto" />
  <section
    class="sm:flex flex-row mx-auto my-4 w-4/5 rounded-2xl shadow-2xl text-smokewhite bg-cover font-sans p-3"
  >
    <div class="sm:w-1/2 sm:pr-4">
      <h2 class="tracking-widest uppercase text-lg p-2 font-medium">
        Lab Design and Installation
      </h2>
      <p class="pb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rem libero
        dolores beatae incidunt enim deserunt debitis, assumenda iste placeat amet odit
        illum dolorum quibusda
      </p>
    </div>
    <img class="w-1/2 rounded-lg sm:block hidden" src="../assets/hero-image.jpg" alt="" />
  </section>
  <section
    class="sm:flex flex-row mx-auto my-4 w-4/5 rounded-2xl shadow-2xl text-smokewhite bg-cover font-sans p-3"
  >
    <div class="sm:w-1/2 sm:pr-4">
      <h2 class="tracking-widest uppercase text-lg p-2 font-medium">
        Lab Design and Installation
      </h2>
      <p class="pb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rem libero
        dolores beatae incidunt enim deserunt debitis, assumenda iste placeat amet odit
        illum dolorum quibusda
      </p>
    </div>
    <img class="w-1/2 rounded-lg sm:block hidden" src="../assets/hero-image.jpg" alt="" />
  </section>
  <section
    class="sm:flex flex-row mx-auto w-4/5 rounded-xl drop-shadow-2xl text-smokewhite bg-cover font-sans p-3"
  >
    <div class="sm:w-1/2 sm:pr-4">
      <h2 class="tracking-widest uppercase text-lg p-2 font-medium">
        Lab Design and Installation
      </h2>
      <p class="pb-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rem libero
        dolores beatae incidunt enim deserunt debitis, assumenda iste placeat amet odit
        illum dolorum quibusda
      </p>
    </div>
    <img class="w-1/2 rounded-lg sm:block hidden" src="../assets/hero-image.jpg" alt="" />
  </section>
  <footer1 />
</template>
<style>
body {
  background: white;
}
</style>
<script>
import navbar from "./navbar.vue";
import footer1 from "./footer1.vue";
export default {
  components: {
    navbar,
    footer1,
  },
};
</script>
