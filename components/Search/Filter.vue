<script setup lang="ts">
const selected = ref()
</script>

<template>
  <div class="ms-5 me-3 m-2 py-2">
    <div>
      <h1>Loader</h1>
    </div>
    <div class="m-1.5 py-1">
      <UCard style="width: 400px; height: 0">‎</UCard>

    </div>
    <div class="m-1.5 py-1">
      <UCheckbox color="primary" label="Exiled" :model-value="false"/>
      <UCheckbox color="primary" label="NW API" :model-value="false" />
    </div>
    <div>
      <h1>Categories</h1>
    </div>
    <div class="m-1.5 py-1">
      <UCheckbox color="primary" label="Moderation" :model-value="false"/>
      <UCheckbox color="primary" label="Tweaks" :model-value="false" />
      <UCheckbox color="primary" label="Utility" :model-value="false"/>
      <UCheckbox color="primary" label="Dev Tool" :model-value="false" />
      <UCheckbox color="primary" label="Fun" :model-value="false"/>
      <UCheckbox color="primary" label="RolePlay" :model-value="false" />
      <UCheckbox color="primary" label="Custom Mapping" :model-value="false"/>
    </div>
    <div>
      <h1>Game Version</h1>
    </div>
    <div class="m-1.5 py-1">
      <UInputMenu
          :popper="{ placement: 'bottom-end' }"
          v-model="selected"
          selected-icon="i-heroicons-check-16-solid"
          placeholder="Select a version..."
          :options="['13.5.1 (LATEST)', '13.5', '13.4.2', '13.4.1', '13.4.0', '13.3.1', '13.3.0', '13.2.1', '13.2.0', '13.1.1', '13.1.0', '13.0.0', '12.0.2', '12.0.1', '12.0.0', '11.2.1', '11.2.0', '11.1.5', '11.1.4', '11.1.3', '11.1.2', '11.1.1', '11.1.0', '11.0.3', '11.0.2', '11.0.1', '11.0.0', '10.2.2', '10.2.1', '10.2.0', '10.1.3', '10.1.2', '10.1.1', '10.1.0', '10.0.6', '10.0.5', '10.0.4', '10.0.3', '10.0.2', '10.0.1', '10.0.0', '9.1.3', '9.1.1', '9.1.0', '9.0.3', '9.0.2', '9.0.1', '9.0.0', '8.0.0', '7.4.0', '7.3.1', '7.3.0', '7.2.0', '7.1.0', '7.0.0', '6.2.0', '6.0.1', '6.0.0', '5.1.1', '5.1.0', '5.0.1', '5.0.0', '4.0.0', '3.3.3', '3.3.2', '3.3.1', '3.3.0', '3.1.0', '3.0.0', '1.1.0', '1.0.2', '1.0.0', '0.4.2', '0.4.1', '0.3.2', '0.3.1', '0.3.0', '0.2.1+0.2.1b', '0.2.0', ]"
      />
    </div>
    <div>
      <h1>Other</h1>
    </div>
    <div class="m-1.5 py-1">
      <UCheckbox color="primary" label="Open Source" :model-value="false"/>
      <UCheckbox color="primary" label="Documentation" :model-value="false"/>
      <UCheckbox color="primary" label="Official" :model-value="false"/>
      <UCheckbox color="primary" label="CLEAR" :model-value="false"/>
      <UCheckbox color="primary" label="CLEAR" :model-value="false"/>
      <UCheckbox color="primary" label="CLEAR" :model-value="false"/>
      <UCheckbox color="primary" label="CLEAR" :model-value="false"/>
    </div>
    <div class="m-1.5 py-1">
      <UButton class="rounded-xl" icon="i-heroicons-x-circle" label="Clear Filter" variant="outline" color="gray"/>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
}
.icon-and-text {
  display: flex;
  align-items: center;
}
</style>