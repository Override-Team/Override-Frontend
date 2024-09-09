<script setup lang="ts">
const members = [
  {
    name: 'Vxrpenter',
    icon: '/team-pics/vxrpenter.png',
    job: 'Frontend Developer',
    quote: 'Running around naked in the snow is actually kinda nice',
    link: 'https://github.com/Vxrpenter'
  },
  {
    name: 'FoxWorn',
    icon: '/team-pics/fox.gif',
    job: 'Backend Developer',
    quote: 'Bazinga',
    link: 'https://github.com/FoxWorn3365'
  }
]
</script>

<template>
  <UContainer class="py-10">
    <section class="grid grid-cols-2 gap-6">
      <div v-for="(item, index) in members" :key="index">
        <UCard class="rounded-xl" style="background-color: #171717; width: 550px;">
          <div class="icon-and-text">
            <NuxtImg format="webp" :src="item.icon" width="80"/>
            <h1 class="px-3">{{ item.name }}</h1>
          </div>
          <div class="py-1">
            <h2>Job at Overrite</h2>
            <h3>- {{ item.job }}</h3>
          </div>
          <div class="py-1">
            <UDivider/>
          </div>
          <div class="py-1">
            <h2 >Personal Quote</h2>
            <h3>{{ item.quote }}</h3>
          </div>
          <div class="text-center py-2">
            <UButton to="{{item.link}}" label=" GitHub" variant="outline" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
          </div>
        </UCard>
      </div>
    </section>
  </UContainer>
</template>

<style scoped>
h1 {
  font-size: 30px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: left;
  color: white;
}
h2 {
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 20px;
}
p {
  color: white;
  font-family: "Inter", sans-serif;
  font-style: italic;
}
.icon-and-text {
  display: flex;
  align-items: center;
}
img {
  border-radius: 50%;
}
</style>