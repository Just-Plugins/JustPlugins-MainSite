<template>
  <router-link
    :to="destination"
    class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border
    bg-white border-gray-100 hover:bg-gray-300 dark:hover:bg-slate-700 dark:hover:border-slate-700 dark:bg-slate-800 dark:border-slate-800 transition-colors ease-in-out duration-300"
  >
    <h1 class="font-bold text-3xl text-gray-800 dark:text-white">{{ title }}</h1>
    <h2 class="text-l text-gray-800 dark:text-white">{{ description }}</h2>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    destination: String,
  },
};
</script>
