<script lang="ts" setup>
import BottomBar from "./components/BottomBar.vue";
import TopBar from "./components/TopBar.vue";
import Me from "./components/Me.vue";
import Home from "./components/Home.vue";

import {inject, onMounted} from "vue";
import Projects from "./components/Projects.vue";
import ContentSection from "./interfaces/ContentSection";

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
  <main class="bg-gray-800 w-full h-full">
    <TopBar :items="sections"/>
    <Home/>
    <hr/>
    <Me/>
    <hr/>
    <Projects />
    <BottomBar/>
  </main>
</template>

<style>
@import "styles.css";

html,
body,
#app {
  width: 100%;
}

body {
  overflow: hidden;
}

html {
  scroll-behavior: smooth;
}

section {
  @apply h-[100vh] w-full
}
</style>
