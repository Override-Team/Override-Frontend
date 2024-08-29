<script setup lang="ts">
import MainCatPages from "~/components/Homepage/MainCatPages.vue";
</script>

<template>
  <UButton to="/plugins" leading-icon="i-heroicons-cube-transparent" label="Plugins" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
  <UButton to="/schematics" leading-icon="i-heroicons-globe-alt" label="Schematics" variant="ghost" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
</template>

<style scoped>

h3:hover {
  text-decoration: underline;
}
</style>