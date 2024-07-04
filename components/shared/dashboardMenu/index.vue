<script setup lang="ts">
import CollapsibleCard from '@/components/shared/CollapsibelCard/index.vue'
import _ from 'lodash'
import { useRoute } from 'vue-router'
import EditIcon from '~/assets/img/icons/edit.vue'

const route = useRoute()
const isActiveRoute = (path: string) => {
  return route.path === path
}
</script>

<template>
  <div class="rounded border border-sec-gray p-4 hidden lg:block">
    <div class="flex justify-between">
      <div>
        <p class="font-[dana-demi] text-lg">فرناز فرضی پور</p>
        <p class="text-text-gray text-sm mt-2">۰۹۳۷۷۲۰۸۸۸۸</p>
      </div>
      <NuxtLink to="/dashboard/profile">
        <div class="cursor-pointer">
          <EditIcon />
        </div>
      </NuxtLink>
    </div>
    <!-- <div class="flex justify-between mt-5">
      <p>کیف پول</p>
      <p>{{ toPersianCurrency(2000) }}</p>
    </div> -->
    <div class="flex justify-between mt-5">
      <p>سطح بندی</p>
      <div class="flex items-center">
        <p class="flex items-end">
          <Icon name="iconoir:badge-check" color="#FCBA2E" size="32" />
        </p>

        <p class="text-primary text-xs mr-1">طلایی</p>
      </div>
    </div>
    <div class="w-full border border-sec-gray my-5"></div>
    <NuxtLink to="/dashboard/orders">
      <div class="flex items-center cursor-pointer">
        <Icon name="ph:shopping-bag-light" size="24" />
        <p class="mr-1 font-[dana-demi] text-sm">سفارشات</p>
      </div>
    </NuxtLink>
    <div class="w-full border border-sec-gray my-5"></div>
    <NuxtLink to="/dashboard/requests">
      <div class="flex items-center cursor-pointer">
        <Icon name="material-symbols-light:list-alt-outline-sharp" size="24" />
        <p class="mr-1 font-[dana-demi] text-sm">درخواست‌ها</p>
      </div>
    </NuxtLink>
    <div class="w-full border border-sec-gray my-5"></div>
    <NuxtLink to="/dashboard/address">
      <div class="flex items-center cursor-pointer">
        <Icon name="material-symbols:my-location" size="24" />
        <p class="mr-1 font-[dana-demi] text-sm">آدرس‌ها</p>
      </div>
    </NuxtLink>
    <div class="w-full border border-sec-gray my-5"></div>
    <NuxtLink to="/dashboard/fav">
      <div class="flex items-center cursor-pointer">
        <Icon name="material-symbols:favorite-outline-rounded" size="24" />
        <p class="mr-1 font-[dana-demi] text-sm">علاقمندی‌ها</p>
      </div>
    </NuxtLink>
    <div class="w-full border border-sec-gray my-5"></div>
    <NuxtLink to="/dashboard/comments">
      <div class="flex items-center cursor-pointer">
        <Icon name="iconamoon:comment-light" size="24" />
        <p class="mr-1 font-[dana-demi] text-sm">دیدگاه</p>
      </div>
    </NuxtLink>
    <div class="w-full border border-sec-gray my-5"></div>
    <div class="flex items-center cursor-pointer">
      <Icon name="cil:exit-to-app" size="24" />
      <p class="mr-1 font-[dana-demi] text-sm">خروج</p>
    </div>
  </div>
  <CollapsibleCard
    title="منو"
    :has-border="false"
    class="block lg:hidden"
    :collapsed="false"
  >
    <div class="rounded border border-sec-gray p-4">
      <div class="flex justify-between">
        <div>
          <p class="font-[dana-demi] text-lg">فرناز فرضی پور</p>
          <p class="text-text-gray text-sm mt-2">۰۹۳۷۷۲۰۸۸۸۸</p>
        </div>
        <NuxtLink to="/dashboard/profile">
          <div class="cursor-pointer">
            <Icon
              name="material-symbols-light:edit-square-outline-rounded"
              size="26"
              color="#FCBA2E"
            />
          </div>
        </NuxtLink>
      </div>

      <div class="flex justify-between mt-5">
        <p>سطح بندی</p>
        <div>
          <p class="flex items-end">
            <Icon name="iconoir:badge-check" color="#FCBA2E" size="32" />
          </p>

          <p class="text-primary text-xs mr-1">طلایی</p>
        </div>
      </div>
      <div class="w-full border border-sec-gray my-5"></div>
      <NuxtLink
        to="/dashboard/orders"
        :class="{ 'active-class': isActiveRoute('/dashboard/orders') }"
      >
        <div class="flex items-center cursor-pointer">
          <Icon name="ph:shopping-bag-light" size="24" />
          <p class="mr-1 font-[dana-demi] text-sm">سفارشات</p>
        </div>
      </NuxtLink>
      <div class="w-full border border-sec-gray my-5"></div>
      <NuxtLink
        to="/dashboard/requests"
        :class="{ 'active-class': isActiveRoute('/dashboard/requests') }"
      >
        <div class="flex items-center cursor-pointer">
          <Icon
            name="material-symbols-light:list-alt-outline-sharp"
            size="24"
          />
          <p class="mr-1 font-[dana-demi] text-sm">درخواست‌ها</p>
        </div>
      </NuxtLink>
      <div class="w-full border border-sec-gray my-5"></div>
      <NuxtLink
        to="/dashboard/address"
        :class="{ 'active-class': isActiveRoute('/dashboard/address') }"
      >
        <div class="flex items-center cursor-pointer">
          <Icon name="material-symbols:my-location" size="24" />
          <p class="mr-1 font-[dana-demi] text-sm">آدرس‌ها</p>
        </div>
      </NuxtLink>
      <div class="w-full border border-sec-gray my-5"></div>
      <NuxtLink
        to="/dashboard/fav"
        :class="{ 'active-class': isActiveRoute('/dashboard/fav') }"
      >
        <div class="flex items-center cursor-pointer">
          <Icon name="material-symbols:favorite-outline-rounded" size="24" />
          <p class="mr-1 font-[dana-demi] text-sm">علاقمندی‌ها</p>
        </div>
      </NuxtLink>
      <div class="w-full border border-sec-gray my-5"></div>
      <NuxtLink
        to="/dashboard/comments"
        :class="{ 'active-class': isActiveRoute('/dashboard/comments') }"
      >
        <div class="flex items-center cursor-pointer">
          <Icon name="iconamoon:comment-light" size="24" />
          <p class="mr-1 font-[dana-demi] text-sm">دیدگاه</p>
        </div>
      </NuxtLink>
      <div class="w-full border border-sec-gray my-5"></div>
      <div class="flex items-center cursor-pointer">
        <Icon name="cil:exit-to-app" size="24" />
        <p class="mr-1 font-[dana-demi] text-sm">خروج</p>
      </div>
    </div>
  </CollapsibleCard>
</template>

<style scoped lang="scss">
.active-class {
  color: #f1af09;
}

.router-link-exact-active {
  div {
    p,
    svg {
      color: #f1af09;
    }
  }
}
</style>
