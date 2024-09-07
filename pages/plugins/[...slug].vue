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
    loader_version: '', //Which loader versions are compatible
    tags: [], //Tags of the project
    sl_versions: [], //Secret Lab Versions supported
    project_version: '', //Current project version
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
          <div class="m-1.5 relative z-10 rounded-xl overflow-hidden p-[2px] transition-colors duration-300 w-full h-44">
            <NuxtLink to="">
              <UCard id="card" class="rounded-xl h-full" style="background-color: #171717">
                <div>
                  <img id="icon" src="../../assets/logos/exiled-logo.png" alt="icon">
                  <h1 id="title">{{item.title}}</h1>
                  <UButton id="author" variant="link" size="lg" color="gray">by {{item.author}}</UButton>
                </div>
                <div>
                  <p id="description">{{item.description}}</p>
                  <div class="flex float-left">
                    <UIcon id="downloads_icon" name="i-heroicons-arrow-down-tray"/><h2 id="downloads" > {{item.downloads}}</h2>
                  </div>
                </div>
                <div class="flex float-right">
                  <p class="px-1" id="loaders">Loaders</p>
                  <img v-show="item.loader_exiled" id="loaders_exiled" src="../../assets/logos/exiled-logo.png" alt="exiled"/>
                  <img v-show="item.loader_nwapi" id="loaders_nwapi" src="../../assets/logos/nwapi-logo.png" alt="nwapi"/>
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
#card {
  border: 1px solid transparent;
  transition: 0.6s;
}
#card:hover {
  border: 1px solid #A78BFA;
  transition: 0.6s;
}

h1 {
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-align: left;
  color: white;
}
#icon {
  border-radius: 10%;
  height: 70px;
  width: 70px;
  position: absolute;
  transition: 0.4s;
}
#icon:hover {
  transform: scale(0.95);
  cursor: pointer;
  transition: 0.4s;
}
#title {
  left: 108px;
  margin-top: 10px;
  position: absolute;
}
#author {
  left: 96px;
  margin-top: 30px;
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
  margin-top: 117px;
  position: relative;
}
#downloads_icon {
  width: 20px;
  right: 4px;
  margin-top: 121px;
  position: relative;
}
#loaders {
  font-weight: bold;
  margin-top: 117px;
  position: relative;
}
#loaders_exiled {
  width: 18px;
  height: 18px;
  margin-top: 120px;
  position: relative;
}
#loaders_nwapi {
  position: relative;
  width: 18px;
  height: 15px;
  margin-top: 122px;
}
</style>