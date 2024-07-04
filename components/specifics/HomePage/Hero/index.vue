<script setup lang="ts">
import TrIcon from '@/assets/img/logo/tr-icon.svg'

</script>
<template>
  <div
    class="bg-secondary flex h-full py-5 lg:h-[calc(100vh-200px)] reltive items-center justify-center"
  >
    <img
      :src="TrIcon"
      alt=""
      class="absolute top-[30%] z-[-1] right-[50%] translate-x-1/2"
    />
    <div class="container w-full">
      <h1 class="text-center text-[30px] font-[dana-bold] text-primary mb-4">
        کالکشن فصل
      </h1>
      <div
        class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center"
      >
        <div
          class="hero-image rounded-full h-[300px] w-[300px] bg-primary justify-center justify-self-center"
        ></div>
        <div
          class="hero-image rounded-full h-[300px] w-[300px] bg-primary justify-center justify-self-center"
        ></div>
        <div
          class="hero-image rounded-full h-[300px] w-[300px] bg-primary justify-center justify-self-center"
        ></div>
        <div
          class="hero-image rounded-full h-[300px] w-[300px] bg-primary justify-center justify-self-center"
        ></div>
      </div>
    </div>
  </div>
</template>
