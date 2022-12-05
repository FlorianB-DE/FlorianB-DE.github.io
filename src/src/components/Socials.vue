<template>
<aside class="fixed bottom-0 w-full h-20 z-10">
    <div class="w-full h-full relative">
    <figure class="xl:bg-gray-900 h-full absolute flex bottom-0 inset-x-28 background-bar z-0">
    </figure>
    <menu class="absolute h-full text-white flex items-center justify-center inset-x-40 z-10 gap-x-24">
        <li><a href="https://gitlab.ruhr-uni-bochum.de/flo" target="_blank"><img :src="gitlabIcon" alt="gitlab icon"></a></li>
        <li><a href="https://github.com/FlorianB-DE" target="_blank"><img :src="githubIcon" alt="github icon"></a></li>
        <li><a href="https://www.linkedin.com/in/florianb-de" target="_blank"><img :src="linkedinIcon" alt="linkedin icon"></a></li>
    </menu>
    </div>
</aside>
</template>
<script lang="ts" setup>
import gitlabIcon from "../assets/gitlab.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedIn.png";
</script>
<style>
.background-bar {
    transform: perspective(10px) rotateX(.4deg);
}

img {
    @apply w-12 aspect-square
}

</style>