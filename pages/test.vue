<template>
  <div class="container">
    <div class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
      <ProductCard
        v-for="product in pData"
        :name="product.name"
        :price="product.price"
        :id="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/shared/Cards/productCard.vue'

const pData = [
  {
    id: 1,
    name: 'test',
    price: '2,000,000',
  },
  {
    id: 2,
    name: 'wefwe',
    price: '5,000,000',
  },
  {
    id: 3,
    name: 'fkjngiodn',
    price: '3,000,000',
  },
]
</script>
