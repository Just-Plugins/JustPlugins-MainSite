<template>
  <div
    class="max-w-screen-xl py-8 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 bg-white"
  >
    <nav class="flex flex-wrap justify-center -mx-5 -my-2">
      <div class="px-8 py-2">
        <router-link
          to="/"
          class="text-base leading-6 text-gray-500 hover:text-gray-900"
        >
          Home
        </router-link>
      </div>
      <div class="px-8 py-2">
        <router-link
          to="/plugins"
          class="text-base leading-6 text-gray-500 hover:text-gray-900"
        >
          Plugins
        </router-link>
      </div>
      <div class="px-8 py-2">
        <a
          href="https://justplugins.xyz/discord"
          class="text-base leading-6 text-gray-500 hover:text-gray-900"
        >
          Discord
        </a>
      </div>
    </nav>
    <p class="mt-8 text-base leading-6 text-center text-gray-400">
      © 2022 JustPlugins. All rights reserved.
    </p>
  </div>
</template>
