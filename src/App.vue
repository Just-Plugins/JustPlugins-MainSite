<template>
  <Header />
  <DarkmodeToggle />
  <router-view />
  <Footer />
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import DarkmodeToggle from "./components/DarkmodeToggle.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    DarkmodeToggle
  }
};
</script>
