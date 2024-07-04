<script setup lang="ts">
import ModalComponent from '@/components/shared/Modal/index.vue'
import _ from 'lodash'

definePageMeta({
  layout: 'dashboard',
})
const isModalOpen = ref({ type: '', isOpen: false })
const isInfoModalOpen = ref(false)

const onOpenModal = (type: string) => {
  isModalOpen.value.isOpen = true
  isModalOpen.value.type = type
}
</script>

<template>
  <div class="grid lg:grid-cols-2">
    <div class="w-full lg:border-l border-sec-gray">
      <div
        class="border-b border-sec-gray py-3 px-2"
        @click="onOpenModal('name')"
      >
        <p class="text-text-gray text-xs font-[dana-demi]">
          نام و نام خانوادگی
        </p>
        <div class="flex w-full justify-between mt-2">
          <p>فرناز فرضی پور</p>
        </div>
     
      </div>
      <div
        class="border-b border-sec-gray py-3 px-2"
        @click="onOpenModal('phone')"
      >
        <p class="text-text-gray text-xs font-[dana-demi]">شماره موبایل</p>
        <div class="flex w-full justify-between mt-2">
          <p>۰۹۳۷۷۲۰۸۸۸۸</p>
          <Icon
            name="material-symbols-light:edit-square-outline-rounded"
            size="26"
            color="#FCBA2E"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div class="border-b border-sec-gray py-3 px-2">
        <p class="text-text-gray text-xs font-[dana-demi]">تاریخ تولد</p>
        <div class="flex w-full justify-between mt-2">
          <p>۲۷۷۷۷۲</p>
          <Icon
            name="material-symbols-light:edit-square-outline-rounded"
            size="26"
            color="#FCBA2E"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div
        class="border-b border-sec-gray py-3 px-2"
        @click="onOpenModal('tax')"
      >
        <p class="text-text-gray text-xs font-[dana-demi]">کد اقتصادی</p>
        <div class="flex w-full justify-between mt-2">
          <p>۸۹۳۴۸۹۳۴۴۳</p>
          <Icon
            name="material-symbols-light:edit-square-outline-rounded"
            size="26"
            color="#FCBA2E"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
    <div class="w-full">
      <div
        class="border-b border-sec-gray py-3 px-2"
        @click="onOpenModal('nat')"
      >
        <p class="text-text-gray text-xs font-[dana-demi]">کد ملی</p>
        <div class="flex w-full justify-between mt-2">
          <p>۳۴۳۴۳۴۴۳۳۴</p>
          <Icon
            name="material-symbols-light:edit-square-outline-rounded"
            size="26"
            color="#FCBA2E"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div
        class="border-b border-sec-gray py-3 px-2"
        @click="onOpenModal('mail')"
      >
        <p class="text-text-gray text-xs font-[dana-demi]">ایمیل</p>
        <div class="flex w-full justify-between mt-2">
          <p>ثقثقبثق</p>
          <Icon
            name="material-symbols-light:edit-square-outline-rounded"
            size="26"
            color="#FCBA2E"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div
        class="border-b border-sec-gray py-3 px-2"
        @click="onOpenModal('job')"
      >
        <p class="text-text-gray text-xs font-[dana-demi]">شغل</p>
        <div class="flex w-full justify-between mt-2">
          <p>بثقلثقلثق</p>
          <Icon
            name="material-symbols-light:edit-square-outline-rounded"
            size="26"
            color="#FCBA2E"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div class="border-b border-sec-gray py-3 px-2">
        <p class="text-text-gray text-xs font-[dana-demi]">برچسب مشتری</p>
        <div
          class="flex w-full justify-between mt-2"
          @click="
            () => {
              isInfoModalOpen = true
            }
          "
        >
          <div>
            <p class="flex items-end">
              <Icon name="iconoir:badge-check" color="#FCBA2E" size="32" />
            </p>

            <p class="text-primary text-xs mr-1">طلایی</p>
          </div>

          <Icon
            name="iconamoon:information-circle-thin"
            size="26"
            color="#FCBA2E"
            class="cursor-pointer"
          />
        </div>
      </div>
    </div>
    <ModalComponent
      :isOpen="isModalOpen.isOpen"
      @update:isOpen="isModalOpen.isOpen = $event"
    >
      <h2 class="text-[20px]">ویرایش</h2>
      <div v-if="isModalOpen.type === 'name'">
        <div
          class="border h-full rounded border-sec-gray flex items-center mt-4"
        >
          <input
            class="w-full h-full indent-4 focus:outline-none bg-transparent py-2 mt-4"
            placeholder="نام"
          />
        </div>
        <div
          class="border h-full rounded border-sec-gray flex items-center mt-4"
        >
          <input
            class="w-full h-full indent-4 focus:outline-none bg-transparent py-2 mt-4"
            placeholder="نام خانوادگی"
          />
        </div>
        <button
          class="h-full w-full bg-primary text-white flex items-center justify-center py-4 mt-4"
        >
          <span class="text-white">به روزرسانی نام و نام خانوادگی</span>
        </button>
      </div>
      <div v-if="isModalOpen.type === 'phone'">
        <div
          class="border h-full rounded border-sec-gray flex items-center mt-4"
        >
          <input
            class="w-full h-full indent-4 focus:outline-none bg-transparent py-2 mt-4"
            placeholder="شماره موبایل"
          />
        </div>

        <button
          class="h-full w-full bg-primary text-white flex items-center justify-center py-4 mt-4"
        >
          <span class="text-white">به روزرسانی شماره موبایل</span>
        </button>
      </div>
      <div v-if="isModalOpen.type === 'tax'">
        <div
          class="border h-full rounded border-sec-gray flex items-center mt-4"
        >
          <input
            class="w-full h-full indent-4 focus:outline-none bg-transparent py-2 mt-4"
            placeholder="شماره اقتصادی"
          />
        </div>

        <button
          class="h-full w-full bg-primary text-white flex items-center justify-center py-4 mt-4"
        >
          <span class="text-white">به روزرسانی شماره اقتصادی</span>
        </button>
      </div>
      <div v-if="isModalOpen.type === 'nat'">
        <div
          class="border h-full rounded border-sec-gray flex items-center mt-4"
        >
          <input
            class="w-full h-full indent-4 focus:outline-none bg-transparent py-2 mt-4"
            placeholder="کدملی"
          />
        </div>

        <button
          class="h-full w-full bg-primary text-white flex items-center justify-center py-4 mt-4"
        >
          <span class="text-white">به روزرسانی کد ملی</span>
        </button>
      </div>
      <div v-if="isModalOpen.type === 'mail'">
        <div
          class="border h-full rounded border-sec-gray flex items-center mt-4"
        >
          <input
            class="w-full h-full indent-4 focus:outline-none bg-transparent py-2 mt-4"
            placeholder="ایمیل"
          />
        </div>

        <button
          class="h-full w-full bg-primary text-white flex items-center justify-center py-4 mt-4"
        >
          <span class="text-white">به روزرسانی ایمیل</span>
        </button>
      </div>
      <div v-if="isModalOpen.type === 'job'">
        <div
          class="border h-full rounded border-sec-gray flex items-center mt-4"
        >
          <input
            class="w-full h-full indent-4 focus:outline-none bg-transparent py-2 mt-4"
            placeholder="شغل"
          />
        </div>

        <button
          class="h-full w-full bg-primary text-white flex items-center justify-center py-4 mt-4"
        >
          <span class="text-white">به روزرسانی شغل</span>
        </button>
      </div>
    </ModalComponent>
    <ModalComponent
      :isOpen="isInfoModalOpen"
      @update:isOpen="isInfoModalOpen = $event"
    >
      <div class="flex items-center">
        <p class="text-lg font-[dana-demi]">برچسب مشتری</p>
        <Icon
          name="iconamoon:information-circle-thin"
          size="26"
          color="#FCBA2E"
          class="cursor-pointer mr-2"
        />
      </div>
      <div class="grid grid-cols-2 gap-4 mt-5">
        <div
          class="w-full border border-sec-gray rounded p-4 flex flex-col items-center"
        >
          <Icon
            name="streamline:discount-percent-coupon"
            size="50"
            color="FCBA2E"
            class="mt-10"
          />
          <p class="mt-5 font-[dana-demi]">همکاری در فروش</p>
          <p class="mt-5 font-[dana-light] text-center">
            در صورتی که از فروشندگان این عرصه هستید و یا در امر فروش قصد همکاری
            با ما را دارید، می‌توانید شماره تماس خود به همراه اطلاعات هویتی را
            برای ما ارسال کنید تا کارشناسان ما با شما تماس بگیرند. پس از آن
            میتوانید از مزایای همکاری بهره‌مند شوید
          </p>
          <button
            class="border border-primary rounded w-full py-2 mt-10 text-primary mb-5"
          >
            ارسال اطلاعات
          </button>
        </div>
        <div
          class="w-full border border-sec-gray rounded p-4 flex flex-col items-center"
        >
          <Icon
            name="streamline:discount-percent-coupon"
            size="50"
            color="FCBA2E"
            class="mt-10"
          />
          <p class="mt-5 font-[dana-demi]">همکاری به صورت پیمانکاری</p>
          <p class="mt-5 font-[dana-light] text-center">
            در صورتی که از پیمانکاران هستید و برای پروژه‌های خود نیاز به محصولات
            ما دارید. کافیست در پنل پیمانکاران ثبت نام کرده و احراز هویت شوید.
            پس از آن میتوانید از مزیای پیمانکاری و تخفیف بر روی اجناس بهره‌مند
            شوید
          </p>
          <button
            class="border border-primary rounded w-full py-2 mt-10 text-primary mb-5"
          >
            ورود به پنل پیمانکاران
          </button>
        </div>
      </div>
    </ModalComponent>
  </div>
</template>
