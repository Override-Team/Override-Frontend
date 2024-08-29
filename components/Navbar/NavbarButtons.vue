<script setup lang="ts">
</script>

<template>
  <NuxtLink class="icon_hover" to="https://github.com/Override-Team"><Icon size="25" name="i-bxl-github"/></NuxtLink>
  <NuxtLink class="icon_hover" to="https://discord.gg/cAXU9Y7T9a"><Icon size="25" name="i-bxl-discord-alt"/></NuxtLink>
  <UButton to="/account/login" label="Sign In" leading-icon="i-heroicons-user-16-solid" variant="solid" color="primary" size="md"/>
</template>

<style scoped>
.icon_hover:hover {
  color: dimgray;
  transition: color 245ms ease-in-out;
}
</style>