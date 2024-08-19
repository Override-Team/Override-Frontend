<script setup lang="ts">
import MainCatPages from "~/components/Homepage/MainCatPages.vue";
</script>

<template>
  <NuxtLink to="/plugins/"><h3>Plugins</h3></NuxtLink>
  <NuxtLink to="/schematics/"><h3>Schematics</h3></NuxtLink>
</template>

<style scoped>

h3:hover {
  color: #7c3aed;
  text-decoration: underline;
}
</style>