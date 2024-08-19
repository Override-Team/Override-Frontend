<script setup lang="ts">
import HomepageFeatures from "~/components/Homepage/HomepageFeatures.vue";
import MainCatPages from "~/components/Homepage/MainCatPages.vue";
</script>

<template>
  <section>
    <div class="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
      <div  data-aos="fade-up">
        <div class="space-y-5 max-w-4xl mx-auto text-center">
          <h1>Override</h1>
        </div>
        <p class="dark:text-white">Upload your plugins and schematics fast and easy</p>
      </div>
      <div class="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
        <MainCatPages />
        <div class="py-20">
          <HomepageFeatures />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  font-size: 45px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: center;
}

p {
  color: black;
  font-family: Inter, sans-serif;
  text-align: center;
}
</style>