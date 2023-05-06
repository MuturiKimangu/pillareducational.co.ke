<template>
    <nav class="breadcrumb flex items-center justify-between w-full px-4 py-2 border border-gray-200">
      <ul class="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <router-link to="/" class="hover:text-gray-700">Home</router-link>
        </li>
        <li v-for="(crumb, index) in crumbs" :key="index">
          <span v-if="index !== crumbs.length - 1">{{ crumb }}</span>
          <span v-else>{{ crumb }}</span>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      separator: {
        type: String,
        default: "/"
      }
    },
    computed: {
      crumbs() {
        const path = this.$route.path;
        const crumbs = path.split("/").filter(crumb => crumb !== "");
        const formattedCrumbs = crumbs.map(crumb => {
          const words = crumb.split("-");
          const formattedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          });
          return formattedWords.join(" ");
        });
        return formattedCrumbs;
      }
    }
  };
  </script>
  