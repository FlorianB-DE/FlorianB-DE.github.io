<template>
<section id="projects" data-heading="Projects" data-in_viewport="">

</section>
</template>

<script setup lang="ts">
import {inject, onMounted} from "vue";
import ContentSection from "../interfaces/ContentSection";

onMounted(() => {
  const el = document.getElementById("projects");
  if (el)
    (inject("sections") as Array<ContentSection>).push({el: el, active: false})
})
</script>

<style scoped>

</style>