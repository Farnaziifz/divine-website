<script setup lang="ts">
import Card from './card.vue'
import HeartIcon from '../../../assets/img/icons/heart.vue'
import discount from '~/assets/img/icons/discount.vue'

type productProps = {
  id: string | number
  name: string
  img: string
  price: string | number
  hasDiscount?: boolean
  priceDiscount?: string | number
}

const props = withDefaults(defineProps<productProps>(), {
  hasDiscount: false,
})
</script>

<template>
  <Card>
    <template v-slot:content>
      <div class="h-full">
        <div class="w-full h-[300px] mb-3 relative">
          <img :src="props.img" class="w-full h-full object-cover rounded" />
          <discount class="absolute -top-4 right-0" v-if="hasDiscount" />
        </div>
        <p class="text-3xl text-primary font-[dana-bold] text-center mb-2">
          {{ props.name }}
        </p>
        <p class="text-xl text-textPrimary mb-3 font-[dana-bold] text-center">
          {{ props.price }}
        </p>
        <div class="flex">
          <NuxtLink class="w-full" :to="`/product/${props.id}`">
            <button class="px-2 py-3 rounded border border-primary w-full">
              <span class="text-primary text-md font-[dana-medium]"
                >مشاهده جزيیات</span
              >
            </button>
          </NuxtLink>
          <button
            class="w-20 p-2 rounded bg-primary flex justify-center mr-3 items-center"
          >
            <HeartIcon />
          </button>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped lang="scss">
.product-title {
  text-align: center;
}
</style>
