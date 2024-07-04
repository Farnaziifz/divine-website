<script setup lang="ts">
import ProductCard from '@/components/shared/Cards/productCard.vue'
import { onBeforeMount } from 'vue'

definePageMeta({
  layout: 'dashboard',
})
</script>

<template>
  <h2 class="font-[dana-bold] text-[16px]">علاقمندی‌ها</h2>

  <div class="grid lg:grid-cols-2 gap-4 mt-4">
    <div>
      <ProductCard :has-border="true" />

      <div class="flex gap-4">
        <!-- <button class="w-full text-center bg-primary text-white py-2 mt-1">
          افزودن به سبد خرید
        </button> -->
        <button class="w-full text-center bg-danger text-white py-2 mt-1">
          دیگر به این محصول علاقمند نیستم!
        </button>
      </div>
    </div>
  </div>
</template>
