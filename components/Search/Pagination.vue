<script setup lang="ts">
const page = ref(1)
const items = ref(Array(2034))
</script>

<template>
  <div class="relative py-2">
    <UCard class="flex center-in-card" style="background-color: #121212; width: 320px; height: 40px">
      <UPagination v-model="page" :max="7" :page-count="1" :total="items.length" />
    </UCard>
  </div>
</template>

<style scoped>
div {
  margin: auto;
}
.center-in-card {
  display: flex;
  align-items: center;
}
</style>