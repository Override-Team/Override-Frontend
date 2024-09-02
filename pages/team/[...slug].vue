<script setup lang="ts">
</script>

<template>
  <UContainer class="py-10">
    <div class="grid grid-cols-2 gap-6">
      <UCard class="rounded-xl" style="background-color: #171717; width: 550px;">
        <div class="icon-and-text">
          <img width="80" src="../../assets/team-pics/vxrpenter.png" alt="vxrpenter"/>
          <h1 class="px-3">Vxrpenter</h1>
        </div>
        <div class="py-1">
          <h2>Job at Overrite</h2>
          <h3>- Frontend Developer</h3>
        </div>
        <div class="py-1">
          <UDivider/>
        </div>
        <div class="py-1">
          <h2 >Personal Quote</h2>
          <h3>Running around naked in the snow is actually kinda nice</h3>
        </div>
        <div class="text-center py-2">
          <UButton to="https://github.com/Vxrpenter" label=" GitHub" variant="outline" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
        </div>
      </UCard>
      <UCard class="rounded-xl" style="background-color: #171717; width: 550px;">
        <div class="icon-and-text">
          <img width="80" src="../../assets/team-pics/fox.gif" alt="fox"/>
          <h1 class="px-3">FoxWorn</h1>
        </div>
        <div class="py-1">
          <h2>Job at Overrite</h2>
          <h3>- Backend Developer</h3>
        </div>
        <div class="py-1">
          <UDivider/>
        </div>
        <div class="py-1">
          <h2 >Personal Quote</h2>
          <p>Bazinga</p>
        </div>
        <div class="text-center py-2">
          <UButton to="https://github.com/FoxWorn3365" label=" GitHub" variant="outline" color="gray" size="xl" :ui="{rounded: 'rounded-xl'}"/>
        </div>
      </UCard>
    </div>
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