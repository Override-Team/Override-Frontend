<script setup lang="ts">
import Navbar from "~/components/Navbar/Navbar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <div class="px-4 flex-grow">
      <slot />
    </div>
  </div>
</template>