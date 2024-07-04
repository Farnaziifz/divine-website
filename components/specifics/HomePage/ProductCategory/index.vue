<script setup lang="ts">
import categoryCard from '~/components/shared/Cards/categoryCard.vue'
import Divine from '@/assets/img/logo/divine.svg'

import img1 from '@/assets/img/temp/1.jpg'
import img2 from '@/assets/img/temp/2.jpeg'
import img3 from '@/assets/img/temp/3.jpg'
import img4 from '@/assets/img/temp/4.jpeg'
import img5 from '@/assets/img/temp/5.jpeg'

const categoryData = [
  { id: 1, name: 'وست‌ها', img: img1 },
  { id: 2, name: 'شلوار', img: img2 },
  { id: 3, name: 'پیراهن', img: img3 },
  { id: 4, name: 'کت', img: img4 },
  { id: 5, name: 'اکسسوری', img: img5 },
  { id: 6, name: 'ست‌ها', img: img5 },
]
</script>

<template>
  <div>
    <div class="container">
      <div class="flex text-[40px] items-baseline">
        <h1>دسته‌بندی‌های</h1>
        <img :src="Divine" alt="" class="mr-1 w-[150px]" />
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-4">
      <categoryCard
        v-for="item in categoryData"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :img="item.img"
      />
    </div>
  </div>
</template>
