<template>
  <nav class="fixed w-full top-0 flex-row flex p-2 z-50 text-white" :class="{ closed: !open }" ref="nav">
    <div class="flex lg:justify-start justify-between ml-auto w-3/4">
      <a v-for="item, n in items" :key="item.el.id" class="ml-2 mr-2 cursor-pointer no-select icon"
        @click="dispatcher(item)" :style="`--item-no: ${n}`">
        <span :class="item.active ? 'font-bold' : ''" class="text-2xl hidden lg:inline"
          v-text="item.el.getAttribute('data-heading')" />
        <component :is="item.icon[Number(item.active)]"
          class="w-12 aspect-square inline align-sub opacity-100 lg:hidden delay-[inherit] duration-[inherit]" />
      </a>
    </div>
    <a class="absolute" @click="toggleMenu">
      <Bars3Icon class="w-12 aspect-square transition-transform absolute inline align-sub lg:hidden open btn"
        ref="openButton" :class="{ active: !open }" />
      <XMarkIcon class="w-12 aspect-square transition-transform absolute inline align-sub lg:hidden close btn"
        :class="{ active: open }" />
    </a>
  </nav>
</template>

<script lang="ts" setup>
import { inject, PropType, ref, onMounted } from "vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import ContentSection from "../interfaces/ContentSection";

const nav = ref<HTMLElement | null>(null)
const openButton = ref<HTMLElement | null>(null)

onMounted(() => openButton.value?.classList.add("init"))

const activeSection = inject("activeSection") as () => ContentSection

let open = ref(true);

defineProps({
  items: {
    type: Object as PropType<Array<ContentSection>>,
    required: true
  }
})

const toggleMenu = () => {
  open.value = !open.value
  if (!openButton.value)
    return

  openButton.value.classList.remove("init")
}

const dispatcher = (item: ContentSection) => {
  activeSection().active = false
  item.active = true
  item.el.scrollIntoView()
}

</script>

<style scoped>
nav {
  --time-scale-multiplier: 1;
}

.open:not(.active) {
  transform: translateX(-100vw) !important;
}

.close:not(.active) {
  animation: gelatine linear calc(1.5s * var(--time-scale-multiplier));
  animation-delay: calc(150ms * var(--time-scale-multiplier));
  transform: translateX(-100vw);
}

.close.active {
  transform: translateX(0);
}

.init {
  transform: translateX(-100vw) !important;
  animation: unset !important;
}

.icon {
  transition-delay: calc(160ms * var(--time-scale-multiplier) * var(--item-no));
  transition-property: transform;
  transition-duration: calc(1s * var(--time-scale-multiplier));
}

.closed .icon {
  transform: translateX(-100vw);
}

.closed .icon>svg {
  transition: transform calc(1s * var(--time-scale-multiplier)) calc(160ms * var(--time-scale-multiplier) * var(--item-no)),
    opacity calc(275ms * var(--time-scale-multiplier) * (var(--item-no) + 1)) calc(160ms * var(--time-scale-multiplier) * var(--item-no));
  transform: scale(0%);
  opacity: 0;
}

.close:not(.active),
.open.active {
  transition-delay: calc(1s * var(--time-scale-multiplier)) !important;
}

.btn {
  transition-duration: calc(500ms * var(--time-scale-multiplier));
}
</style>