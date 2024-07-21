<script setup lang="ts">
</script>

<template>
  <NuxtLink class="icon_hover" to="https://github.com/Override-Team"><Icon size="25" name="i-bxl-github"/></NuxtLink>
  <NuxtLink class="icon_hover" to="https://discord.gg/cAXU9Y7T9a"><Icon size="25" name="i-bxl-discord-alt"/></NuxtLink>
  <NuxtLink to="/signup" class="block py-2 px-4 text-white font-medium bg-primary-600 duration-150 hover:bg-primary-500 active:bg-primary-700 rounded-lg shadow-lg hover:shadow-none">
    Get Started
  </NuxtLink>
</template>

<style scoped>
.icon_hover:hover {
  color: dimgray;
  transition: color 245ms ease-in-out;
}
</style>