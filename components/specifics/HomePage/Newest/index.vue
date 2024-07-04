<script setup lang="ts">
import Divine from '@/assets/img/logo/divine.svg'
import ProductCard from '@/components/shared/Cards/productCard.vue'
import img1 from '@/assets/img/temp/1.jpg'
import img2 from '@/assets/img/temp/2.jpeg'
import img3 from '@/assets/img/temp/3.jpg'

const pData = [
  {
    id: 1,
    name: 'test',
    price: '2,000,000',
    img: img1,
  },
  {
    id: 2,
    name: 'wefwe',
    price: '5,000,000',
    img: img2,
  },
  {
    id: 3,
    name: 'fkjngiodn',
    price: '3,000,000',
    img: img3,
  },
]
</script>
<template>
  <div class="container">
    <div class="flex text-[40px] items-baseline">
      <h1>به سبک</h1>
      <img :src="Divine" alt="" class="mr-1 w-[150px]" />
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
      <ProductCard
        v-for="product in pData"
        :name="product.name"
        :price="product.price"
        :id="product.id"
        :img="product.img"
      />
    </div>
  </div>
</template>
