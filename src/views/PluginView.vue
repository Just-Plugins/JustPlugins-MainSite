<template>
  <section
    class="flex items-center justify-center py-10 text-white bg-gradient-to-r from-green-500 to-blue-700 sm:py-16 md:py-24 lg:py-32"
  >
    <div class="relative max-w-3xl px-10auto lg:px-0">
      <h1 class="relative flex flex-col text-6xl font-extrabold">
        {{ pluginName }}
      </h1>
    </div>
  </section>

  <PluginOverview :id="pluginId" :name="pluginName" />
</template>

<script>
import PluginOverview from "../components/PluginOverview.vue";

export default {
  data() {
    return {
      pluginName: this.$route.params.plugin,
      pluginId: this.$route.params.id,
    };
  },
  components: {
    PluginOverview,
  },
};
</script>
