<script setup lang="ts">
import Brand from "~/components/Navbar/Brand.vue";
import NavbarButtons from "~/components/Navbar/NavbarButtons.vue";
import NavbarSelection from "~/components/Navbar/NavbarSelection.vue";
</script>

<template>
  <header class="mb-4" style="background-color: #212121">
    <UContainer class="flex items-center py-4 gap-2 lg:gap-x-10">
      <Brand />
      <NavbarSelection />
      <div class="flex ml-auto items-center lg:gap-4">
        <NavbarButtons />
      </div>
    </UContainer>
  </header>
</template>