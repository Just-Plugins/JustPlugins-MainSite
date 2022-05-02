<template>
  <section
    class="relative w-full px-8 text-gray-700 bg-white dark:bg-slate-800"
  >
    <div
      class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl"
    >
      <router-link
        to="/"
        class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-gray-900 dark:text-white select-none"
        >JustPlugins</router-link
      >

      <nav
        class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute"
      >
        <router-link
          to="/"
          class="relative font-medium leading-6 dark:text-white text-gray-600 transition duration-150 ease-out dark:hover:text-gray-500 hover:text-gray-900"
        >
          <span class="block">Home</span>
        </router-link>

        <router-link
          to="/plugins"
          class="relative font-medium leading-6 dark:text-white text-gray-600 transition duration-150 ease-out dark:hover:text-gray-500 hover:text-gray-900"
        >
          <span class="block">Plugins</span>
        </router-link>

        <a
          href="https://justplugins.xyz/discord"
          class="relative font-medium leading-6 dark:text-white text-gray-600 transition duration-150 ease-out dark:hover:text-gray-500 hover:text-gray-900"
        >
          <span class="block">Discord</span>

        </a>
      </nav>
    </div>
  </section>
</template>
