<template>
  <button
    id="dropdownTopButton"
    data-dropdown-toggle="dropdownTop"
    data-dropdown-placement="top"
    class="mr-3 mb-3 md:mb-0 text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center fixed bottom-5 right-8 z-[99] p-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    type="button"
  >
    <LightBulbIcon class="h-6 text-white" />
  </button>

  <!-- Dropdown menu -->
  <div
    id="dropdownTop"
    class="z-20 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-1 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownTopButton"
    >
      <li>
        <button
          v-on:click="localStorage.theme = 'light'"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Light
        </button>
      </li>
      <li>
        <button
          v-on:click="localStorage.theme = 'dark'"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          Dark
        </button>
      </li>
      <li>
        <button
          v-on:click="localStorage.removeItem('theme')"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          System Default
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { LightBulbIcon } from "@heroicons/vue/solid";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

export default {
  components: {
    LightBulbIcon,
  },
  methods: {
    toggleTheme() {
      localStorage.theme = "light";
    },
  },
};
</script>
