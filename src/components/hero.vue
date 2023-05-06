<template>
  <div class="hero relative h-20">
    <div class="hero-content font-sans text-center px-6">
      <h1
        class="text-3xl text-slate-50 tracking-wide uppercase font-black pb-4 text-shadow shadow-offset-x-2 shadow-offset-y-2"
      >
        Elevate Science Education with Custom Lab Installations
      </h1>
      <router-link :to="{ name: 'labinstall' }">
        <Button1 class="uppercase" text="LEARN MORE" />
      </router-link>
    </div>
  </div>
</template>
<style>
.hero {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2%;
}
.hero::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(rgba(0, 0, 0, 0.158), rgba(245, 253, 250, 0.9)),
    url("../assets/hero-image.jpg");
  background-size: cover;
  background-position: center;
}
</style>

<script>
import Button1 from "./button1.vue";
export default {
  components: { Button1 },
};
</script>
