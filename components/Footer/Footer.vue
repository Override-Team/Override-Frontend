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
          <p><NuxtLink to="/account/signup">Create Account</NuxtLink></p>
          <p><NuxtLink to="/docs">Read the Documentation</NuxtLink></p>
          <p><NuxtLink to="/plugins">Explore Projects</NuxtLink></p>
        </div>
        <div>
          <h2>Community</h2>
          <p><NuxtLink to="/">Forums</NuxtLink></p>
          <p><NuxtLink to="https://discord.gg/3uGrFYr98n">Discord</NuxtLink></p>
          <p><NuxtLink to="https://github.com/Override-Team">GitHub</NuxtLink></p>
        </div>
        <div>
          <h2>Override</h2>
          <p><NuxtLink to="/about-us">About Us</NuxtLink></p>
          <p><NuxtLink to="/team">Our Team</NuxtLink></p>
        </div>
        <div>
          <h2>Terms</h2>
          <p><NuxtLink to="/terms">Terms</NuxtLink></p>
          <p><NuxtLink to="/">Privacy Policy</NuxtLink></p>
          <p><NuxtLink to="/guidelines">Community Guidelines</NuxtLink></p>
        </div>
      </UContainer>
      <UContainer>
        <UDivider class="my-4"/>
      </UContainer>
      <div class="">
        <UContainer class="py-4 gap-2 ">
          <div class="float-left">
            <NuxtLink to="/"><h1 id="align_text">Override</h1></NuxtLink>
          </div>
          <div class="float-right">
            <NuxtLink to="/licencing"><p id="align_text">© 2024 Override-Team</p></NuxtLink>
          </div>
        </UContainer>
      </div>
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
#align_text {
  margin-top: -20px;
}
p:hover {
  text-decoration: underline;
}
</style>