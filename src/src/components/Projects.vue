<template>
<section id="projects" class="relative overflow-x-hidden" data-heading="Projects" data-in_viewport="">
<HoverBox class="right-10 bottom-10 duration-700" data-in_viewport="fade-right">
  <span class="text-5xl no-select align-super">&lt;/profile&gt;</span>
</HoverBox>
</section>
</template>

<script setup lang="ts">
import {inject, onMounted} from "vue";
import ContentSection from "../interfaces/ContentSection";
import HoverBox from "./HoverBox.vue"
import { CommandLineIcon as outlineIcon } from "@heroicons/vue/24/outline";
import { CommandLineIcon as solidIcon } from "@heroicons/vue/24/solid";

onMounted(() => {
  const el = document.getElementById("projects");
  if (el)
    (inject("sections") as Array<ContentSection>).push({ el: el, active: false, icon: [outlineIcon, solidIcon]})
})
</script>

<style scoped>

</style>