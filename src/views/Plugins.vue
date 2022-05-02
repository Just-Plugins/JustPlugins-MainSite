<template>
  <section
    class="py-12 sm:py-16 bg-gradient-to-r from-green-500 to-blue-700 dark:from-green-800 dark:to-blue-900"
  >
    <div class="max-w-7xl px-10 mx-auto sm:text-center">
      <h2 class="font-bold px-5 text-3xl sm:text-4xl lg:text-5xl text-white">
        All our Plugins
      </h2>

      <h3 class="font-bold text-3xl mt-3 text-white">Premium Plugins</h3>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16"
      >
        <div v-for="paided in premiumPlugins" :key="paided.id">
          <Plugin
            :title="paided.title"
            :description="paided.description"
            :destination="{
              name: 'Plugin',
              params: { plugin: paided.title, id: paided.id },
            }"
          />
        </div>
      </div>

      <h3 class="font-bold text-3xl mt-3 text-white">Free Plugins</h3>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16"
      >
        <div v-for="free in freePlugins" :key="free.id">
          <Plugin
            :title="free.title"
            :description="free.description"
            :destination="{
              name: 'Plugin',
              params: { plugin: free.title, id: free.id },
            }"
          />
        </div>
      </div>

      <h3 class="font-bold text-3xl mt-3 text-white">Coming Soon...</h3>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16"
      >
        <div v-for="soon in comingSoon" :key="soon.id">
          <Plugin
            :title="soon.title"
            :description="soon.description"
            destination="/plugins"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Plugin from "../components/Plugin.vue";

export default {
  components: {
    Plugin,
  },
  data() {
    return {
      premiumPlugins: [
        {
          title: "UltimateStaff",
          description: "All your needs as a server owner",
          id: 1,
        },
      ],
      freePlugins: [
        {
          title: "SuperEssentials",
          description: "All the essentials for your server",
          id: 4,
        },
      ],
      comingSoon: [
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
