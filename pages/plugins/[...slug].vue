<script setup lang="ts">
import Pagination from "~/components/Search/Pagination.vue";

const projects = [
  {
    project_id: 1,
    icon: '../../assets/logos/exiled-logo.png', //Later location or smth. else of the icon (in the db)
    title: 'Example Plugin', //Limit for title length - 25
    author: 'Vxrpenter', //Author of the plugin
    loaders: [], //Which loaders are compatible
    loader_version: '', //Which loader versions are compatible
    tags: [], //Tags of the project
    sl_versions: [], //Secret Lab Versions supported
    project_version: '', //Current project version
    downloads: "69", //Download count
  }
]
</script>

<template>
  <section class="mx-auto text-center">
    <UContainer>
      <div>
        <Search/>
        <Pagination/>
      </div>
      <section class="grid grid-cols-3 gap-6">
        <div v-for="(item, index) in projects" :key="index">
          <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] transition-colors duration-300 w-full h-44">
            <NuxtLink to="">
              <UCard class="rounded-xl h-full" style="background-color: #171717">
                <div class="">
                  <img id="icon" src="../../assets/team-pics/vxrpenter.png" alt="icon">
                  <h1 id="title">{{item.title}}</h1>
                  <UButton id="author" variant="link" size="lg" label="by Vxrpenter" color="gray"/>
                </div>
                <div class="flex">
                  <UIcon id="downloads_icon" name="i-heroicons-arrow-down-tray-16-solid"/><h2 id="downloads" > {{item.downloads}}</h2>
                </div>
                <div class="float-right">
                  <img id="loaders_exiled" src="../../assets/logos/exiled-logo.png" alt="exiled"/>
                  <img id="loaders_nwapi" src="../../assets/logos/nwapi-logo.png" alt="nwapi"/>
                </div>
              </UCard>
            </NuxtLink>
          </div>
        </div>
      </section>
    </UContainer>
  </section>
</template>

<style scoped>
h1 {
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: left;
  color: white;
}
#icon {
  height: 70px;
  width: 70px;
  position: absolute;
  border-radius: 20%;
}
#title {
  left: 108px;
  position: absolute;
}
#author {
  left: 96px;
  margin-top: 20px;
  position: absolute;
}
#downloads {
  left: 46px;
  margin-top: 117px;
  position: absolute;
}
#downloads_icon {
  margin-top: 121px;
  position: absolute;
}
#loaders_exiled {
  width: 20px;
  height: 20px;
  left: 340px;
  margin-top: 121px;
  position: absolute;
}
#loaders_nwapi {
  width: 20px;
  height: 17px;
  left: 360px;
  margin-top: 123px;
  position: absolute;
}
</style>