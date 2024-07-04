<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isCollapsed = ref(true) // Default state is collapsed

type collapsibleCardProps = {
  title: string
  hasBorder: boolean
  collapsed: boolean // New prop to control collapse state from parent
}

const props = defineProps<collapsibleCardProps>()
const emits = defineEmits(['update:collapsed'])

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  emits('update:collapsed', isCollapsed.value)
}

// Watch for prop changes to sync internal state
watch(
  () => props.collapsed,
  (newCollapsed) => {
    isCollapsed.value = newCollapsed
  },
  { immediate: true } // Sync initial state
)

// Watch for route changes to reset collapse state
// watch(
//   () => route.params,
//   () => {
//     isCollapsed.value = true
//   }
// )
</script>

<template>
  <div
    class="collapsible-card"
    :class="props.hasBorder ? 'border border-primary rounded' : ''"
  >
    <div
      class="header flex items-center justify-between"
      @click="toggleCollapse"
    >
      <p>{{ props.title }}</p>
      <Icon
        :name="
          isCollapsed ? 'mdi:chevron-double-down' : 'mdi:chevron-double-up'
        "
      />
    </div>
    <transition name="fade">
      <div v-if="!isCollapsed" class="py-3 px-6 text-justify">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.header {
  padding: 10px;
  cursor: pointer;
}
</style>
