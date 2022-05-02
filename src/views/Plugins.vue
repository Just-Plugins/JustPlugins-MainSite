<template>
  <section class="py-12 sm:py-16 bg-gradient-to-r from-green-500 to-blue-700">
    <div class="max-w-7xl px-10 mx-auto sm:text-center">
      <h2 class="font-bold px-5 text-3xl sm:text-4xl lg:text-5xl text-white">
        All our Plugins
      </h2>

      <h3 class="font-bold text-3xl mt-3 text-white">Premium Plugins</h3>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16"
      >
        <div v-for="paided in premiumPlugins" :key="paided.id">
          <router-link
            :to="{ name: 'Plugin', params: { plugin: paided.title, id: paided.id } }"
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100 hover:bg-gray-300 transition-colors ease-in-out duration-300"
          >
            <h1 class="font-bold text-3xl text-gray-800">{{ paided.title }}</h1>
            <h2 class="text-xl text-gray-800">{{ paided.description }}</h2>
          </router-link>
        </div>
      </div>

      <h3 class="font-bold text-3xl mt-3 text-white">Free Plugins</h3>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16"
      >
        <div v-for="free in freePlugins" :key="free.id">
          <router-link
            :to="{ name: 'Plugin', params: { plugin: free.title, id: free.id } }"
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-gray-100 hover:bg-gray-300 transition-colors ease-in-out duration-300"
          >
            <h1 class="font-bold text-3xl text-gray-800">{{ free.title }}</h1>
            <h2 class="text-xl text-gray-800">{{ free.description }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      premiumPlugins: [
        {
          title: "UltimateStaff",
          description: "All your needs as a server owner",
          id: 1,
        },
        {
          title: "UltimateHub",
          description: "All your needs in a server hub",
          id: 2,
        },
        {
          title: "UltimateNPC",
          description: "Made creating NPC simple",
          id: 3,
        },
      ],
      freePlugins: [
        {
          title: "SuperEssentials",
          description: "All the essentials for your server",
          id: 4,
        },
        {
          title: "SuperHolograms",
          description: "An easy way for creating holograms",
          id: 5,
        },
      ],
    };
  },
};
</script>
