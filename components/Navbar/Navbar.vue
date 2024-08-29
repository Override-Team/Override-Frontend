<script setup lang="ts">
import Brand from "~/components/Navbar/Brand.vue";
import NavbarButtons from "~/components/Navbar/NavbarButtons.vue";
import NavbarSelection from "~/components/Navbar/NavbarSelection.vue";
</script>

<template>
  <header class="header mb-4">
    <UContainer class="flex items-center py-4 gap-2 lg:gap-x-10">
      <Brand />
      <div class="test flex ml-auto items-center lg:gap-5">
        <NavbarSelection />
      </div>
      <div class="flex ml-auto items-center lg:gap-4">
        <NavbarButtons />
      </div>
    </UContainer>
  </header>
</template>

<style>
.header {
  background-color: #121212;
  z-index: 99;
  position: sticky;
  top: 0;
}
.test {
  padding-left: 66px;
}
</style>