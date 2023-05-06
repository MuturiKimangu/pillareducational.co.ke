<template>
  <navbar class="mx-auto w-4/5 sticky" />
  <hero class="mx-auto" />
  <About-mini class="mx-auto w-4/5 mt-4" />
  <footer1 />
</template>
<style>
body {
  background-color: rgb(248, 252, 251);
}
</style>
<script>
import navbar from "./navbar.vue";
import hero from "./hero.vue";
import footer1 from "./footer1.vue";
import aboutmini from "./about-us.vue";
export default { components: { navbar, hero, footer1 } };
</script>
