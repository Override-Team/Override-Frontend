<script setup lang="ts">
import SignupWindow from "~/components/Account/SignupWindow.vue";
import {definePageMeta} from "#imports";
definePageMeta({
  layout: "empty",
})
</script>

<template>
  <div data-aos="fade-up">
    <SignupWindow />
  </div>
</template>