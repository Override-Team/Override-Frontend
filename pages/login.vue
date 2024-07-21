<script setup lang="ts">
import Login from "~/components/Account/LoginWindow.vue";
import {definePageMeta} from "#imports";
definePageMeta({
  layout: "empty",
})
</script>

<template>
  <div data-aos="fade-up">
    <Login />
  </div>
</template>