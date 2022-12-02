<template>
  <footer>
    <aside class="xl:bg-gray-900 h-20 fixed flex bottom-0 left-20 right-20 bottom-bar">
      <menu class="flex items-center justify-between w-full px-80 transform-none">

        <a class="circle hover:animate-none animate-pulse aspect-square border-white border-2 flex overflow-hidden w-10"
          href="javascript:void(0)" @click.prevent="clickListener()">
          <ArrowDownIcon class="h-5 w-5 text-white m-auto" />
        </a>

        <Socials v-if="!portrait" classes="w-10" />
      </menu>
    </aside>

    <aside class="fixed top-3/4 flex flex-row right-0 transition-transform socials z-50" v-show="portrait" ref="el">
      <a href="javascript:void(0)" id="left-arrow" class="circle animate-pulse">
        <ArrowLeftIcon class="text-inherit transition-transform w-14" />
      </a>
      <Socials classes="w-14 m-auto p-1" />
    </aside>
  </footer>
</template>

<script lang="ts" setup>
import { inject, ref, onMounted } from "vue";
import { ArrowDownIcon, ArrowLeftIcon } from '@heroicons/vue/solid'
import Socials from './Socials.vue'

const clickListener = inject("scrollToSection") as () => void

let portrait = ref(screen.availHeight > screen.availWidth);

window.addEventListener("resize", () => {
  portrait.value = screen.availHeight > screen.availWidth
  console.log("resize")
})

const el = ref<HTMLElement>();

onMounted(() => {
  const la = el.value?.querySelector<HTMLElement>("#left-arrow"),
    as = el.value?.parentElement?.querySelectorAll<HTMLElement>(".bottom-bar a")

  if (!la || !as) return;

  la.onclick = () => {
    el.value?.classList.toggle("open")
  }

  as[0].style.order = Math.ceil(as.length / 2).toString();
})
</script>

<style scoped>
.bottom-bar {
  transform: perspective(10px) rotateX(.4deg);
}

menu>a:hover>* {
  @apply animate-jet
}

#left-arrow {
  opacity: .6;
  color: var(--github-color);
  --border-thickness: 3px;
  border: var(--border-thickness) solid var(--github-color);
}

#left-arrow>svg {
  width: calc(3.5rem - 2 * var(--border-thickness))
}

.socials {
  --link-amount: 4;
  transform: translateX(calc(3.5rem * var(--link-amount)));
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
  background: rgba(31, 41, 55, .85);
}

.open #left-arrow>svg {
  transform: rotateZ(180deg);
}

.socials.open {
  transform: unset;
}
</style>