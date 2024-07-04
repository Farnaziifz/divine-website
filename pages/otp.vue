<script setup lang="ts">
//@ts-ignore
import Logo from '@/assets/img/logo/logo-icon-typo.svg'
// import { confirmOtp } from '@/logics/specifics/auth.handler'
import Timer from '@/components/shared/Time/index.vue'
// import { useRouter } from 'vue-router'
import _ from 'lodash'
// import { addTobaket } from '~/logics/specifics/user.handler'
// const router = useRouter()
definePageMeta({
  //@ts-ignore
  layout: 'none!',
})
const phoneNumber = ref()
const otpCode = ref()
// onBeforeMount(() => {
//   phoneNumber.value = localStorage.getItem('pn')
// })

// const getBasketItems = () => {
//   const basket = localStorage.getItem('basket')
//   return basket ? JSON.parse(basket) : []
// }

// const checkOtpLength = async () => {
//   if (otpCode.value.length === 5) {
//     const res = await confirmOtp(phoneNumber.value, otpCode.value)
//     if (res.id) {
//       localStorage.setItem('access', res.tokens?.access)
//       localStorage.setItem('refresh', res.tokens?.refresh)
//       router.push('/dashboard/orders')
//       const basketItem = getBasketItems()

//       basketItem.forEach(
//         async (el: { id: string | number; price: number; qn: number }) => {
//           const res = await addTobaket(el.id, el.price, el.qn)
//         }
//       )
//     }
//   }
// }
// watch(otpCode, () => {
//   checkOtpLength()
// })
</script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="rounded border lg:border-sec-gray p-10 text-center">
      <img :src="Logo" alt="zaza kala" class="mb-4 w-40 mx-auto" />
      <p class="font-[dana-extra] font-xl">کد تایید را وارد کنید</p>
      <p class="font-[dana-light] mt-3">
        کد تایید برای شماره {{ phoneNumber }} پیامک شد
      </p>

      <input
        v-model="otpCode"
        maxlength="5"
        class="w-[300px] text-center lg:w-[400px] border-2 border-primary focus:outline-none py-3 mt-4 rounded indent-2"
      />
      <Timer />
      <button
        class="w-[300px] lg:w-[400px] block p-4 bg-primary rounded focus:outline-none text-white mt-2"
        @click="checkOtpLength"
      >
        ورود
      </button>
    </div>
  </div>
</template>
