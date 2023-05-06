<template>
  <header>
    <nav class="container mx-auto py-2 pl-2">
      <div class="flex items-center justify-between">
        <div>
          <router-link to="/"
            ><img
              class="h-12 w-12 rounded-full"
              src="../../src/assets/pillar-logo.jpg"
              alt=""
              srcset=""
          /></router-link>
        </div>

        <div class="hidden md:flex items-center uppercase font-normal tracking-widest">
          <router-link to="/" class="mx-2 hover:text-green-400">Home</router-link>
          <router-link to="/about" class="mx-2 hover:text-green-400">About</router-link>
          <router-link to="/contact" class="mx-2 hover:text-green-400"
            >Contact</router-link
          >
          <router-link to="/productListing" class="mx-2 hover:text-green-400"
            >Products</router-link
          >
        </div>
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-300">
            <svg
              class="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        :class="{ hidden: !menuOpen, block: menuOpen }"
        class="md:hidden mt-4 transition duration-500 ease-in-out uppercase tracking-widest"
      >
        <router-link
          to="/"
          class="block py-2 px-4 text-sm focus:bg-slate-100 active:text-green-300"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="block py-2 px-4 text-sm focus:bg-slate-100 active:text-green-300"
          >About</router-link
        >
        <router-link
          to="/contact"
          class="block py-2 px-4 text-sm focus:bg-slate-100 active:text-green-300"
          >Contact</router-link
        >
        <router-link
          to="/Products"
          class="block py-2 px-4 text-sm focus:bg-slate-100 active:text-green-300"
          >Products</router-link
        >
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
