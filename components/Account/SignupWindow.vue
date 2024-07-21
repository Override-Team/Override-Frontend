<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters'),
  confirmpassword: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
  confirmpassword: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {

}
</script>

<template>
  <h1 class="dark:text-white text-3xl font-medium mb-4 text-center"><Icon name="heroicons:lock-closed"/> Sign-up</h1>
  <UCard class="max-w-sm mx-auto" style="background-color: #171717">
    <div class="flex items-center space-x-4">
      <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2">
        <USkeleton class="h-4 w-[250px]" />
        <USkeleton class="h-4 w-[200px]" />
      </div>
    </div>
    <UDivider class="my-4"/>
    <UButton block class="mb-4" variant="outline" color="gray" to="/auth/github" external>
      <Icon name="uil:github" /> Sign up with GitHub
    </UButton>
    <UDivider class="my-4" label="OR" />
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UFormGroup label="Confirm Passowrd" name="conf-password">
        <UInput v-model="state.confirmpassword" type="password" />
      </UFormGroup>
      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
    <UDivider class="my-4" label="OR"/>
    <div>
      <p align="center">Already have an account? <a><NuxtLink to="/login" style="; color: #7c3aed">login</NuxtLink></a></p>
    </div>
  </UCard>
</template>

<style scoped>
h1 {
  color: black;
}
p {
  color: white;
}
a:hover {
  text-decoration: underline;
}
</style>