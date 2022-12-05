<script lang="ts" setup>

import TopNavigation from "./components/TopNavigation.vue";
import Me from "./components/Me.vue";
import Home from "./components/Home.vue";

import {inject, onMounted} from "vue";
import Projects from "./components/Projects.vue";
import ContentSection from "./interfaces/ContentSection";
import Socials from "./components/Socials.vue";

const sections: Array<ContentSection> = inject("sections") as Array<ContentSection>

onMounted(() => {
  const inViewport: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-in_viewport", entry.isIntersecting);
    });
  };

  const Obs = new IntersectionObserver(inViewport);

// Attach observer to every [data-in_viewport] element:
  const ELs_inViewport = document.querySelectorAll("[data-in_viewport]");
  ELs_inViewport.forEach(EL => Obs.observe(EL));
})

</script>

<template>
  <main class="bg-gray-800 w-full h-full relative z-0">
    <TopNavigation :items="sections" />
    <!--<Socials />-->
    <Home />
    <hr />
    <Me />
    <hr />
    <Projects />
    <footer class="h-[10vh] w-full"></footer>
  </main>
</template>

<style>
</style>
