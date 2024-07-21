<script setup lang="ts">
const features = [
  {
    icon: 'i-heroicons-arrow-up-circle-16-solid',
    title: 'Fast Uploads',
    desc: 'Upload your project fast and publish it for other people to use',
  },
  {
    icon: 'i-heroicons-sparkles-16-solid',
    title: 'Upgrade your Server',
    desc: 'Get plugin, schematics and even pre made configuration files to upgrade your server',
  },
  {
    icon: 'i-heroicons-code-bracket-square-16-solid',
    title: 'Get Community Feedback',
    desc: 'Collect feedback from reviews to improve your project',
  },


]
</script>

<template>
  <section>
    <div class="max-w-screen-xl mx-auto px-4 text-center md:px-8">
      <div class="mt-12">
        <ul class="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
          <li v-for="(item, index) in features" :key="index" class="space-y-3">
            <div  class="w-12 h-12 mx-auto bg-primary/10 text-primary-600 rounded-full flex items-center justify-center">
              <UIcon :name="item.icon" class="h-6 w-6 text-primary" />
            </div>
            <h4 class="text-lg  font-semibold">
              {{ item.title }}
            </h4>
            <p>
              {{ item.desc }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>