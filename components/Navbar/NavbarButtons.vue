<script setup lang="ts">
const selected = ref(true)

type Theme = 'light' | 'dark';

const setColorTheme = (theme: Theme) => {
  useColorMode().preference = theme
}
</script>

<template>
  <UToggle v-model="selected" on-icon="i-heroicons-moon-solid" off-icon="i-heroicons-sun-solid"  @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"/>
  <NuxtLink to="/signup" class="block py-2 px-4 text-white font-medium bg-primary-600 duration-150 hover:bg-primary-500 active:bg-primary-700 rounded-lg shadow-lg hover:shadow-none">
    Get Started
  </NuxtLink>
</template>

<style scoped>

</style>