<!--- # IMPORTANT - TEMPORARY CODE # -->
<!-- This code has to be remade and is only a placeholder. It works ok but not when scrolling and is probably not optimized -->
<!--- # IMPORTANT - TEMPORARY CODE # -->

<script setup lang="ts">
const wrapper = ref<Array<HTMLElement | null>>([]);

function mouseMoveGradient(e: MouseEvent) {
  for (let i = 0; i < wrapper.value.length; i++) {
    const rect = wrapper.value[i]?.getBoundingClientRect();

    if (rect) {
      const x = e.pageX;
      const y = e.pageY;

      const diffX = x - rect.x;
      const diffY = y - rect.y;

      wrapper.value[i]?.style.setProperty("--x", `${diffX}px`);
      wrapper.value[i]?.style.setProperty("--y", `${diffY}px`);
    }
  }
}

onMounted(() => {
  document.addEventListener("mousemove", mouseMoveGradient, false);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", mouseMoveGradient, false);
});

</script>
<template>
  <div class="relative p-4 text-white">
      <section class="grid grid-cols-2 gap-8 mt-4">
        <div data-aos="fade-down-right" v-for="i in Array.from({ length: 1 })"
             ref="wrapper"
             class="wrapper relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44"
             style="--x: -350px; --y: -350px">
          <NuxtLink to="plugins/search">
            <UCard class="rounded-xl p-3 h-full" style="background-color: #212121">
              <div class="icon-and-text">
                <img width="50" src="../../assets/logos/exiled-logo.png" alt="exiled"/>
                <h3 class="text-3xl font-bold">Exiled Plugins</h3>
              </div>
              <p class="text-xs py-2">Exiled plugins are plugins that run using the exiled framework that is really powerful and supports everything from custom items over custom mapping</p>

            </UCard>
          </NuxtLink>
        </div>
        <div data-aos="fade-down-left" v-for="i in Array.from({ length: 1 })"
             ref="wrapper"
             class="wrapper relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44"
             style="--x: -350px; --y: -350px">
          <NuxtLink to="plugins/search">
            <UCard class="rounded-xl p-3 h-full" style="background-color: #212121">
              <div class="icon-and-text">
                <img width="60" src="../../assets/logos/nwapi-logo.png" alt="exiled"/>
                <h3 class="text-3xl font-bold">‎ API Plugins</h3>
              </div>
              <p class="text-xs py-2">Northwood api plugins are the build in way by northwood to mod your server easily and fast without installing external frameworks or many dependencies</p>
            </UCard>
          </NuxtLink>
        </div>
        <div data-aos="fade-up-right" v-for="i in Array.from({ length: 1 })"
             ref="wrapper"
             class="wrapper relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44"
             style="--x: -350px; --y: -350px">
          <NuxtLink to="/schematics/search">
            <UCard class="rounded-xl p-3 h-full" style="background-color: #212121">
              <div class="icon-and-text">
                <img width="60" src="../../assets/logos/schematics-logo.png" alt="exiled"/>
                <h3 class="text-3xl font-bold">‎ Schematics</h3>
              </div>
              <p class="text-xs py-2">With schamatics you are able to use custom rooms and maps to make your server more interesting to explore for new and old players</p>
            </UCard>
          </NuxtLink>
        </div>
        <div data-aos="fade-up-left" v-for="i in Array.from({ length: 1 })"
             ref="wrapper"
             class="wrapper relative z-10 rounded-xl overflow-hidden p-[2px] hover:bg-[#7c3aed] transition-colors duration-300 w-full h-44"
             style="--x: -350px; --y: -350px">
          <NuxtLink to="/">
            <UCard class="rounded-xl p-3 h-full" style="background-color: #212121">
              <div class="icon-and-text">
                <Icon size="45" name="i-heroicons-clock-16-solid"/>
                <h3 class="text-3xl font-bold">‎ COMING SOON</h3>
              </div>
              <p class="text-xs py-2">This feature is not finished yet so be patiend and wait a little bit</p>
            </UCard>
          </NuxtLink>
        </div>
      </section>
  </div>
</template>

<style scoped>
.icon-and-text {
  display: flex;
  align-items: center;
}
.wrapper:before {
  background: radial-gradient(
      250px circle at var(--x) var(--y),
      #7c3aed 0,
      transparent 100%
  );
  will-change: background;
  content: "";
  display: block;
  position: absolute;
  left: -2px;
  top: -2px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
}
</style>