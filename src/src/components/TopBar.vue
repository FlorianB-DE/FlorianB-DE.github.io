<template>
  <nav class="sticky w-full top-0 flex-col p-2">
    <a v-for="item in items" :key="item.el.id" class="ml-2 mr-2 cursor-pointer no-select"
       @click="dispatcher(item)">
      <span :class="item.active ? 'font-bold' : ''"
            class="text-white text-xl">{{ item.el.getAttribute("data-heading") }}</span>
    </a>
  </nav>
</template>

<script lang="ts" setup>
import {defineProps, inject, PropType} from "vue";
import ContentSection from "../interfaces/ContentSection";

const activeSection = inject("activeSection") as () => ContentSection

defineProps({
  items: {
    type: Object as PropType<Array<ContentSection>>,
    required: true
  }
})

const dispatcher = (item: ContentSection) => {
  activeSection().active = false
  item.active = true
  item.el.scrollIntoView();
}

</script>

<style scoped>
</style>