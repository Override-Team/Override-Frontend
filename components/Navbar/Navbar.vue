<script setup lang="ts">
import Brand from "~/components/Navbar/Brand.vue";
import NavbarButtons from "~/components/Navbar/NavbarButtons.vue";
</script>

<template>
  <header class="mb-4" style="background-color: #212121">
    <UContainer class="flex items-center py-4 gap-2 lg:gap-4">
      <Brand />
      <div class="flex ml-auto items-center lg:gap-4">
        <NavbarButtons />
      </div>
    </UContainer>
  </header>
</template>