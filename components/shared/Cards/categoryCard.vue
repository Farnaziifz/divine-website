<script setup lang="ts">
type categoryType = {
  id: string | number
  name: string
  img: string
}

const props = defineProps<categoryType>()
</script>

<template>
  <div class="w-full h-[400px] bg-primary-40 p-5 relative cursor-pointer">
    <div class="w-full h-full rounded bg-secondary">
      <img :src="props.img" alt="" class="w-full h-full object-cover" />
    </div>

    <div class="w-full h-full absolute top-0 left-0 bg-primary-40"></div>
    <h2
      class="text-white font-[dana-demi] text-[40px] absolute bottom-0 right-4"
    >
      {{ props.name }}
    </h2>
  </div>
</template>
