<template>
  <div>
    <Navbar />

    <slot></slot>    
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head"

useHead({
  title: 'Punk Starter Template',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    { name: 'description', content: 'Punk Starter template with Nuxt 3, Orbis, and Vue Dapp' }
  ],
  htmlAttrs: {"data-theme": 'emerald'}
})
</script>