<template>
  <!-- Section 2 -->
  <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
    <div
      class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
    >
      <!-- Image -->
      <div
        class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
      >
        <img
          v-for="funtion in data"
          :key="funtion.id"
          :src="funtion.description1.gif"
          class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
        />
      </div>

      <!-- Content -->
      <div
        class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none"
      >
        <h2
          class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
          v-for="funtion in data"
          :key="funtion.id"
        >
          {{ funtion.description1.title }}
        </h2>
        <p
          class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg"
          v-for="funtion in data"
          :key="funtion.id"
        >
          {{ funtion.description1.description }}
        </p>
      </div>
      <!-- End  Content -->
    </div>
    <div
      class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16"
    >
      <!-- Content -->
      <div
        class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32"
      >
        <h2
          class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
          v-for="funtion in data"
          :key="funtion.id"
        >
          {{ funtion.description2.title }}
        </h2>
        <p
          v-for="funtion in data"
          :key="funtion.id"
          class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg"
        >
          {{ funtion.description2.description }}
        </p>
      </div>
      <!-- End  Content -->

      <!-- Image -->
      <div
        class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2"
      >
        <img
          v-for="funtion in data"
          :key="funtion.id"
          :src="funtion.description2.gif"
          class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
        />
      </div>
    </div>
    <!-- End Image -->
    <div
      class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
    >
      <!-- Image -->
      <div
        class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
      >
        <img
          v-for="funtion in data"
          :key="funtion.id"
          :src="funtion.description3.gif"
          class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
        />
      </div>
      <!-- End Image -->

      <!-- Content -->
      <div
        class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none"
      >
        <h2
          class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
          v-for="funtion in data"
          :key="funtion.id"
        >
          {{ funtion.description3.title }}
        </h2>
        <p
          class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg"
          v-for="funtion in data"
          :key="funtion.id"
        >
          {{ funtion.description3.description }}
        </p>
      </div>
      <!-- End  Content -->
    </div>
    <div
      class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16"
    >
      <!-- Content -->
      <div
        class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32"
      >
        <h2
          class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
          v-for="funtion in data"
          :key="funtion.id"
        >
          {{ funtion.description4.title }}
        </h2>
        <p
          class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg"
          v-for="funtion in data"
          :key="funtion.id"
        >
          {{ funtion.description4.description }}
        </p>
      </div>
      <!-- End  Content -->

      <!-- Image -->
      <div
        class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2"
      >
        <img
          v-for="funtion in data"
          :key="funtion.id"
          :src="funtion.description4.gif"
          class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"
        />
      </div>
      <!-- End Image -->
    </div>
  </section>

  <!-- Features -->
  <section class="py-20 bg-white">
    <div class="container max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold tracking-tight text-center">
        Plugin Features
      </h2>
      <div
        v-for="features in data"
        :key="features.id"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16"
      >
        <div v-for="feature in features.features" :key="feature.id">
          <a
            class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border bg-white border-white"
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
            <h4 class="text-xl font-medium text-gray-700">
              {{ feature.title }}
            </h4>
            <p class="text-base text-center text-gray-500">
              {{ feature.description }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import jsonData from "../data/plugins.json";

export default {
  props: ["name"],
  data() {
    return {
      data: jsonData[this.name],
    };
  },
};
</script>
