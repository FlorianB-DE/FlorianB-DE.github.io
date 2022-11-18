<template>
    <a href="https://github.com/FlorianB-DE" target="_blank" class="order-1">
        <img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"
            :class="props.classes">
    </a>
    <a href="https://www.linkedin.com/in/florian-becker-6749a7205/" target="_blank" id="linkedin" class="order-2">
        <img :class="props.classes">
    </a>
    <a href="https://git.noc.ruhr-uni-bochum.de/beckefp6" target="_blank" class="order-4">
        <img src="https://gitlab.ruhr-uni-bochum.de/uploads/-/system/appearance/favicon/1/favicon_gitlab_max32px.ico"
            :class="props.classes">
    </a>
    <a href="https://gitlab.com/florianq-two" target="_blank" id="gitlab" class="order-5">
        <img :class="props.classes">
    </a>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import linkedin from "../assets/LI-In-Bug.png";
import gitlab_icon from "../assets/gitlab.svg"

onMounted(() => {
    const linkedin_el = document.querySelector("#linkedin > img") as HTMLImageElement | null,
        gitlab_el = document.querySelector("#gitlab > img") as HTMLImageElement | null;
    if (!linkedin_el || !gitlab_el) return;
    linkedin_el.src = linkedin;
    gitlab_el.src = gitlab_icon;


});
const props = defineProps({
    classes: String
})
</script>
<style scoped>

</style>
