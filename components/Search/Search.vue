<script setup lang="ts">
import Filter from "~/components/Search/FilterPlugins.vue";
</script>

<template>
  <UCard class="rounded-xl h-full" style="background-color: #171717">
    <UInput
        :ui="{ icon: { trailing: { pointer: '' } } }"
        color="gray"
        variant="outline"
        placeholder="Type to Search..."
        icon="i-heroicons-magnifying-glass-16-solid"
        size="lg">
      <template #trailing="">
        <UPopover>
          <template #panel>
            <Filter />
          </template>
          <UButton color="gray" icon="i-heroicons-list-bullet-16-solid" variant="link" label="Filter" size="lg" @click=""/>
        </UPopover>
      </template>
    </UInput>
  </UCard>
</template>

<style scoped>
</style>