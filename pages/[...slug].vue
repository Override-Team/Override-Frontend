<script setup lang="ts">
</script>

<template>
  <section>
    <div class="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
      <div>
        <div class="py-1 space-y-5 max-w-4xl mx-auto text-center">
          <h1>Override</h1>
        </div>
        <p class="dark:text-white">Upload your plugins and schematics fast and easy</p>
      </div>
      <div class="py-3 space-x-4 space-y-5 max-w-4xl mx-auto text-center">
        <UButton to="/plugins" label="Browse Plugins" leading-icon="i-heroicons-command-line" variant="outline" color="gray" size="md"/>
        <UButton to="/account/signup" label="Sign Up" leading-icon="i-heroicons-user-16-solid" variant="solid" color="primary" size="md"/>
      </div>
      <div class="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
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