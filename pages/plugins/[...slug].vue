<script setup lang="ts">
import Pagination from "~/components/Search/Pagination.vue";



const projects = [
  {
    project_id: 1, //The id the project is saved an accessed under
    icon: '../../assets/logos/exiled-logo.png', //Later location or smth. else of the icon (in the db)
    title: 'Example Plugin', //Limit for title length - 25
    author: 'Example User', //Author of the plugin
    description: 'A small plugin for things and other things that does things and things and so on, lets get max leght here', //Limit for the description - 100
    loader_exiled: true, //Is Exiled compatible?
    loader_nwapi: true, //Is NWAPI compatible?
    tags: [], //Tags of the project
    downloads: '69', //Download count
  },
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
          <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] transition-colors duration-300 w-full h-48">
            <NuxtLink to="">
              <UCard id="card" class="rounded-xl h-full" style="background-color: #171717">
                <div class="float-right">
                  <UPopover :popper="{ placement: 'right-start', offsetDistance: 30}">
                    <template #panel>
                      <UCard>

                      </UCard>
                    </template>
                    <UButton id="expand" color="gray" icon="i-heroicons-bars-3-bottom-left-16-solid" variant="link" size="lg" @click=""/>
                  </UPopover>
                </div>
                <div>
                  <img id="icon" src="../../assets/team-pics/fox.gif" alt="icon">
                  <h1 id="title" class="pluginTitle">{{item.title}}</h1>
                  <UButton id="author" variant="link" size="lg" color="gray">by {{item.author}}</UButton>
                </div>
                <div>
                  <p id="description">{{item.description}}</p>
                  <div class="flex float-left">
                    <UIcon id="downloads_icon" name="i-heroicons-arrow-down-tray"/><h2 id="downloads" > {{item.downloads}}</h2>
                  </div>
                </div>
                <div class="flex float-right">
                  <div v-show="item.loader_exiled" class="flex px-1">
                    <img id="loaders_exiled" src="../../assets/logos/exiled-logo.png" alt="exiled"/><p id="loaders_exiled_txt">Exiled</p>
                  </div>
                  <div v-show="item.loader_nwapi" class="flex">
                    <img id="loaders_nwapi" src="../../assets/logos/nwapi-logo.png" alt="nwapi"/><p id="loaders_nwapi_txt">API</p>
                  </div>
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
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
}
.pluginTitle {
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: left;
  color: white;
}
#card {
  border: 1px solid transparent;
  transition: 0.6s;
}
#card:hover {
  border: 1px solid #A78BFA;
  transition: 0.6s;
}
#expand {
  margin-top: -23px;
  right: 40px;
  position: absolute;
}
#icon {
  border-radius: 10%;
  height: 70px;
  width: 70px;
  position: absolute;
  margin-top: -8px;
  left: 24px;
  transition: 0.4s;
}
#icon:hover {
  transform: scale(0.95);
  cursor: pointer;
  transition: 0.4s;
}
#title {
  left: 100px;
  margin-top: -5px;
  position: absolute;
}
#author {
  left: 87px;
  margin-top: 17px;
  position: absolute;
}
#description {
  font-size: 15px;
  text-align: left;
  margin-top: 70px;
  position: absolute;
}
#downloads {
  font-weight: bold;
  right: 2px;
  margin-top: 134px;
  position: relative;
}
#downloads_icon {
  width: 20px;
  right: 4px;
  margin-top: 137px;
  position: relative;
}
#loaders_exiled_txt{
  margin-top: 133px;
  position: relative;
}
#loaders_nwapi_txt{
  margin-top: 133px;
  position: relative;
}
#loaders_exiled {
  width: 18px;
  height: 18px;
  margin-top: 135px;
  position: relative;
}
#loaders_nwapi {
  position: relative;
  width: 18px;
  height: 15px;
  margin-top: 137px;
}
</style>