<template>
  <!-- Intro Hero -->
  <section
    class="px-5 p-64 bg-gradient-to-r from-green-500 to-blue-700 dark:from-green-800 dark:to-blue-900 md:px-0"
  >
    <div
      class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center"
    >
      <h1
        class="text-4xl font-extrabold tracking-tight text-left text-white sm:text-5xl md:text-6xl md:text-center"
      >
        JustPlugins
      </h1>
      <p
        class="w-full mx-auto text-base text-left text-gray-300 sm:text-lg lg:text-2xl md:max-w-3xl md:text-center"
      >
        Professional Plugins for your Minecraft server!
      </p>
      <div
        class="relative flex flex-col justify-center md:flex-row md:space-x-4"
      >
        <router-link
          to="plugins"
          class="flex items-center px-6 py-3 text-white bg-green-400 hover:bg-gray-200 hover:text-gray-600 rounded-full transition-all ease-in-out hover:transition-all duration-300"
        >
          All Plugins
        </router-link>
      </div>
    </div>
  </section>

  <!-- Features -->
  <section class="py-24 bg-white dark:bg-slate-800">
    <div class="container max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold tracking-tight text-center dark:text-white">
        Our Features
      </h2>
      <p class="mt-2 text-lg text-center text-gray-600 dark:text-gray-300">
        Check out our list of awesome features below.
      </p>
      <div
        class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0"
      >
        <div
          class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 dark:bg-slate-700 rounded-xl shadow-xl"
        >
          <div class="p-3 text-white bg-green-400 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
              <path
                d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"
              ></path>
              <circle cx="6" cy="14" r="3"></circle>
              <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
            </svg>
          </div>
          <h4 class="text-xl font-medium text-gray-700 dark:text-white">Support</h4>
          <p class="text-base text-center text-gray-500 dark:text-gray-400">
            We are always happy to help with problems, Just join our Discord
            Server!
          </p>
        </div>

        <div
          class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 dark:bg-slate-700 rounded-xl shadow-xl"
        >
          <div class="p-3 text-white bg-green-400 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 9l3 3l-3 3"></path>
              <line x1="13" y1="15" x2="16" y2="15"></line>
              <rect x="3" y="4" width="18" height="16" rx="2"></rect>
            </svg>
          </div>
          <h4 class="text-xl font-medium text-gray-700 dark:text-white">Developers</h4>
          <p class="text-base text-center text-gray-500 dark:text-gray-400">
            JustPlugins updates everytime as a new version of Minecraft comes
            out!
          </p>
        </div>

        <div
          class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 dark:bg-slate-700 rounded-xl shadow-xl"
        >
          <div class="p-3 text-white bg-green-400 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline
                points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"
              ></polyline>
              <line x1="12" y1="12" x2="20" y2="7.5"></line>
              <line x1="12" y1="12" x2="12" y2="21"></line>
              <line x1="12" y1="12" x2="4" y2="7.5"></line>
              <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
            </svg>
          </div>
          <h4 class="text-xl font-medium text-gray-700 dark:text-white">Compatibility</h4>
          <p class="text-base text-center text-gray-500 dark:text-gray-400">
            Always works with the latest version of Minecraft!
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Discord -->
  <section
    class="px-2 py-24 bg-gradient-to-r from-green-500 to-blue-700 dark:from-green-800 dark:to-blue-900 md:px-0"
  >
    <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
      <div class="flex flex-wrap items-center sm:-mx-3">
        <div class="w-full md:w-1/2 md:px-3">
          <div
            class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0"
          >
            <h1
              class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl"
            >
              <span class="block text-white xl:inline"
                >Join our Discord Server!</span
              >
            </h1>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <iframe
            src="https://discord.com/widget?id=957586367603425400&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
