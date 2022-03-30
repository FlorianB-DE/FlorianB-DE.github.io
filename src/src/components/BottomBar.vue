<template>
  <aside class="xl:bg-gray-900 h-20 fixed flex bottom-0 left-20 right-20">
    <menu class="m-auto">
      <a class="rounded-[100%] hover:animate-none animate-pulse
      aspect-square border-white border-2 w-10 block flex overflow-hidden"
         href="javascript:void(0)" @click.prevent="clickListener()">
        <ArrowDownIcon class="h-5 w-5 text-white m-auto"/>
      </a>
    </menu>
  </aside>
</template>

<script lang="ts" setup>
import {inject} from "vue";
import {ArrowDownIcon} from '@heroicons/vue/solid'

const clickListener = inject("scrollToSection") as () => void
</script>

<style scoped>
aside {
  transform: perspective(10px) rotateX(.4deg);
}

a:hover > * {
  @apply animate-jet
}
</style>