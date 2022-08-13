<template>
    <a href="https://github.com/FlorianB-DE" target="_blank" class="order-1">
        <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
            :class="props.classes">
    </a>
    <a href="https://www.linkedin.com/in/florian-becker-6749a7205/" target="_blank" id="linkedin" class="order-2">
        <img src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" :class="props.classes">
    </a>
    <a href="https://git.noc.ruhr-uni-bochum.de/beckefp6" target="_blank" class="order-4">
        <img src="https://gitlab.ruhr-uni-bochum.de/uploads/-/system/appearance/favicon/1/favicon_gitlab_max32px.ico"
            :class="props.classes">
    </a>
    <a href="https://gitlab.com/florianq-two" target="_blank" class="order-5">
        <img src="https://about.gitlab.com/nuxt-images/company/company-tanuki.svg" :class="props.classes">
    </a>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import linkedin from "../assets/LI-In-Bug.png";

onMounted(() => {
  const el = document.getElementById<HTMLImageElement>("linkedin");
  if (!el) return;
  el.src = linkedin;
});
const props = defineProps({
    classes: String
})
</script>
<style scoped>
</style>
