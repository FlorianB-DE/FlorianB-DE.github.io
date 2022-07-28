<template>
    <aside class="fixed portrait:top-[80vh] flex flex-row right-0 transition-transform" ref="el">
        <a href="javascript:void(0)" id="left-arrow" class="circle animate-pulse">
            <ArrowLeftIcon class="w-14 text-inherit transition-transform" />
        </a>
        <a href="https://github.com/FlorianB-DE">
            <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
                class="circle border-rad">
        </a>
    </aside>
</template>

<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/solid";
import { onMounted, ref } from "vue";

const el = ref<HTMLElement>();

onMounted(() => {
    const la = el.value?.querySelector<HTMLElement>("#left-arrow")
    if (!la) return;

    la.onclick = () => {
        el.value?.classList.toggle("open")
    }
})
</script>
<style scoped>
#left-arrow {
    opacity: .6;
    color: var(--github-color);
    --border-thickness: 3px;
    border: var(--border-thickness) solid var(--github-color);
}

#left-arrow>svg {
    width: calc(3.5rem - 2 * var(--border-thickness))
}

aside {
    transform: translateX(calc(3.5rem * 1));
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    background: rgba(31, 41, 55, .85);
}

.open #left-arrow>svg {
    transform: rotateZ(180deg);
}

aside.open {
    transform: unset;
}

img {
    @apply w-14
}
</style>