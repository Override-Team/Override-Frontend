<script setup lang="ts">
</script>

<template>
  <div>
    <footer class="px-4 py-4 max-w-screen-xl mx-auto">
      <UContainer >
        <UDivider class="py-4 gap-2"/>
      </UContainer>
      <UContainer class="flex py-4 gap-2 lg:gap-52">
        <div>
          <h2>Getting Started</h2>
          <p><NuxtLink to="/signup">Create Account</NuxtLink></p>
          <p><NuxtLink to="/docs">Read the Documentation</NuxtLink></p>
          <p><NuxtLink to="/">Explore Projects</NuxtLink></p>
        </div>
        <div>
          <h2>Community</h2>
          <p><NuxtLink to="/">Forums</NuxtLink></p>
          <p><NuxtLink to="https://discord.gg/3uGrFYr98n">Discord</NuxtLink></p>
          <p><NuxtLink to="https://github.com/Override-Team">GitHub</NuxtLink></p>
        </div>
        <div>
          <h2>Override</h2>
          <p><NuxtLink to="/">About Us</NuxtLink></p>
          <p><NuxtLink to="/">Our Team</NuxtLink></p>
        </div>
        <div>
          <h2>Terms</h2>
          <p><NuxtLink to="/terms">Terms</NuxtLink></p>
          <p><NuxtLink to="/">Privacy Policy</NuxtLink></p>
          <p><NuxtLink to="/">Community Guidelines</NuxtLink></p>
        </div>
      </UContainer>
      <UContainer class="py-4 gap-2 ">
        <UDivider class="my-4"/>
        <NuxtLink to="/"><h1>Override</h1></NuxtLink>
      </UContainer>
    </footer>
  </div>

</template>

<style scoped>
h1 {
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  color: white;
}
h2 {
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 15px;
}

p {
  color: gray;
  font-size: 14px;
}

p:hover {
  text-decoration: underline;
}
</style>