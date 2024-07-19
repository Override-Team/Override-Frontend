<script setup lang="ts">
import Navbar from "~/components/Navbar/Navbar.vue";
import Footer from "~/components/Footer/Footer.vue"
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="px-4 flex-grow">
      <slot />
    </div>
    <div data-aos="fade-up">
      <Footer />
    </div>
  </div>
</template>

