<script setup lang="ts">
import Slogan from '@/assets/img/slugan.png'
import TrIcon from '@/assets/img/logo/tr-icon.svg'
</script>
<template>
  <div class="bg-secondary flex h-screen reltive">
    <img :src="TrIcon" alt="" class="absolute top-[100%] z-[-1] right-[50%] translate-x-1/2"  />
    <div class="container  w-full">
      <div class="h-[250px]">
        <div class="container">
          <img :src="Slogan" alt="" class="w-full" />
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        <div
          class="hero-image rounded-full h-[500px] w-[300px] bg-primary"
        ></div>
        <div
          class="hero-image rounded-full h-[500px] w-[300px] bg-primary"
        ></div>
        <div
          class="hero-image rounded-full h-[500px] w-[300px] bg-primary"
        ></div>
        <div
          class="hero-image rounded-full h-[500px] w-[300px] bg-primary"
        ></div>
      </div>
    </div>
  </div>
</template>
