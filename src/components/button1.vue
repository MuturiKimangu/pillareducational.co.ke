<template>
  <button
    class="bg-green-500 border-20px hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
