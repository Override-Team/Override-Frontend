<script setup lang="ts">
import Filter from "~/components/Search/Filter.vue";
</script>

<template>
  <div class="grid">

  </div>
  <section class="mx-auto text-center">
    <UContainer>
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
              <UButton  color="gray" icon="i-heroicons-list-bullet-16-solid" variant="none" label="Filter" size="lg" @click=""/>
            </UPopover>
          </template>
        </UInput>
      </UCard>
      <!--- # IMPORTANT # -->
      <!--- This is only a testing showcase, scheduled for removal -->
      <!--- # IMPORTANT # -->
      <div class="grid grid-cols-3 py-4 gap-6 mt-2">
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
        <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44">
          <UCard class="rounded-xl p-3 h-full" style="background-color: #171717"/>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.icon-and-text {
  display: flex;
  align-items: center;
}
</style>