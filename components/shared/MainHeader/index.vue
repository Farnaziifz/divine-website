<script setup lang="ts">
import LogoIconTypo from '@/assets/img/logo/logo-icon-typo.svg'
import SearchIcon from '@/assets/img/icons/search.vue'
import BasketIcon from '@/assets/img/icons/basket.vue'
</script>

<template>
  <div class="py-10 bg-white">
    <div class="container flex justify-between items-center">
      <div class="flex">
        <p class="text-primary ml-10">خانه دیواین</p>
        <p class="text-primary ml-10">کالکشن‌های دیواین</p>
        <p class="text-primary ml-10">دسته‌بندی دیواین</p>
        <SearchIcon color="#9A6649" class="ml-4"/>
        <BasketIcon color="#9A6649" class=""/>
      </div>
      <div>
        <img :src="LogoIconTypo" alt="" class="w-[200px]" />
      </div>
    </div>
  </div>
</template>
