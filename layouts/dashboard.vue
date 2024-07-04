<script setup lang="ts">
import dashbaordMenu from '@/components/shared/dashboardMenu/index.vue'
import MainHeader from '@/components/shared/MainHeader/index.vue'
</script>
<template>
  <MainHeader />
  <div class="container grid lg:grid-cols-3 lg:gap-4 lg:mt-12 mt-3">
    <div class="lg:col-span-1">
      <dashbaordMenu />
    </div>
    <div class="lg:col-span-2 rounded border border-sec-gray p-4">
      <slot />
    </div>
  </div>
</template>
