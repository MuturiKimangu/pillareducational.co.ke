<template>
    <navbar class="mx-auto md:w-4/5"/>
     <hero class="mx-auto md:w-4/5"/>
     <aboutUs class="mx-auto md:w-4/5"/>
     <ProductCard/>
     <footer1 :fixed="'true'" class="mx-auto md:w-4/5"/>
  </template>
  <style>
  body{
    background-image: url('src/assets/leaves.png');
  }
  </style>
  <script>
  import navbar from '../components/navbar.vue'
  import hero from '../components/hero.vue'
  import aboutUs from '../components/about-us.vue';
  import footer1 from '../components/footer1.vue';
  import ProductCard from '../components/productCard.vue';
  import ProductListing from '../components/productListing.vue';
  export default {
    components:{ navbar, hero, aboutUs, ProductCard, footer1, ProductListing }
  }
  </script>