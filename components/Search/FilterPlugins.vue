<script setup lang="ts">
const selectedSLVersion = ref()
</script>

<template>
  <UCard style="width: 400px;">
    <div class="-ms-1">
      <UCard class="flex -ms-1 icon-and-text" style="width: 320px; height: 40px">
        <h1>Loader</h1>
      </UCard>
      <div class="ms-4 py-1">
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <NuxtImg id="loaders_exiled" src="/logos/exiled-logo.png"/> <p id="align_text">Exiled</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <NuxtImg id="loaders_nwapi" src="/logos/nwapi-logo.png"/> <p class="px-1" id="align_text">API</p>
        </div>
      </div>
      <UDivider class="py-4"/>
      <UCard class="flex -ms-1 icon-and-text" style="width: 320px; height: 40px">
        <h1>Categories</h1>
      </UCard>
      <div class="ms-4 py-1">
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-exclamation-triangle-16-solid"/> <p class="px-1" id="align_text">Moderation</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-bolt-16-solid"/> <p class="px-1" id="align_text">Tweaks</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-cog-16-solid"/> <p class="px-1" id="align_text">Utility</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-command-line-16-solid"/> <p class="px-1" id="align_text">Dev Tool</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-fire-16-solid"/> <p class="px-1" id="align_text">Fun</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-academic-cap-16-solid"/> <p class="px-1" id="align_text">RolePlay</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-globe-europe-africa-16-solid"/> <p class="px-1" id="align_text">Custom Mapping</p>
        </div>
      </div>
      <UDivider class="py-4"/>
      <UCard class="flex -ms-1 icon-and-text" style="width: 320px; height: 40px">
        <h1>Game Version</h1>
      </UCard>
      <div class="ms-4 py-1">
        <USelect
            :popper="{ placement: 'bottom-end'}"
            v-model="selectedSLVersion"
            leading-icon="i-heroicons-wrench-screwdriver-16-solid"
            selected-icon="i-heroicons-check-16-solid"
            placeholder="Select a version..."
            :options="['13.5.1 (LATEST)', '13.5', '13.4.2', '13.4.1', '13.4.0', '13.3.1', '13.3.0', '13.2.1', '13.2.0', '13.1.1', '13.1.0', '13.0.0', '12.0.2', '12.0.1', '12.0.0', '11.2.1', '11.2.0', '11.1.5', '11.1.4', '11.1.3', '11.1.2', '11.1.1', '11.1.0', '11.0.3', '11.0.2', '11.0.1', '11.0.0', '10.2.2', '10.2.1', '10.2.0', '10.1.3', '10.1.2', '10.1.1', '10.1.0', '10.0.6', '10.0.5', '10.0.4', '10.0.3', '10.0.2', '10.0.1', '10.0.0', '9.1.3', '9.1.1', '9.1.0', '9.0.3', '9.0.2', '9.0.1', '9.0.0', '8.0.0', '7.4.0', '7.3.1', '7.3.0', '7.2.0', '7.1.0', '7.0.0', '6.2.0', '6.0.1', '6.0.0', '5.1.1', '5.1.0', '5.0.1', '5.0.0', '4.0.0', '3.3.3', '3.3.2', '3.3.1', '3.3.0', '3.1.0', '3.0.0', '1.1.0', '1.0.2', '1.0.0', '0.4.2', '0.4.1', '0.3.2', '0.3.1', '0.3.0', '0.2.1+0.2.1b', '0.2.0', ]"
        />
      </div>
      <UDivider class=" py-4"/>
      <UCard class="flex -ms-1 icon-and-text" style="width: 320px; height: 40px">
        <h1>Other</h1>
      </UCard>
      <div class="ms-4 py-1">
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-inbox-stack-16-solid"/> <p class="px-1" id="align_text">Open Source</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-book-open-16-solid"/> <p class="px-1" id="align_text">Documentation</p>
        </div>
        <div class="flex">
          <UCheckbox color="primary" class="px-1"/> <UIcon id="align_icon" name="i-heroicons-presentation-chart-line-16-solid"/> <p class="px-1" id="align_text">Official</p>
        </div>
      </div>
      <div class="m-1.5 text-center">
        <UButton class="rounded-xl" icon="i-heroicons-x-circle-16-solid" label="Clear Filter" variant="outline" color="gray"/>
      </div>
    </div>

  </UCard>
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
#loaders_exiled {
  width: 18px;
  height: 18px;
  position: relative;
}
#loaders_nwapi {
  position: relative;
  margin-top: 2px;
  width: 18px;
  height: 15px;
}

#align_text {
  margin-top: -2px;
}
#align_icon {
  margin-top: 2px;
}
</style>