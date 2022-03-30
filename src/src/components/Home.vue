<template>
  <section id="home" class="flex justify-center items-center" data-heading="Home" data-in_viewport="">
  </section>
</template>

<script lang="ts" setup>
import {inject, onMounted} from "vue";
import ContentSection from "../interfaces/ContentSection";

onMounted(() => {
  const el = document.getElementById("home");
  if (el)
    (inject("sections") as Array<ContentSection>).push({el: el, active: true})
})
</script>

<style scoped>

</style>