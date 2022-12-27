<template>
  <section id="projects" class="relative overflow-x-hidden" data-heading="Projects" data-in_viewport="">
    <HoverBox class="right-10 bottom-10 duration-700" data-in_viewport="fade-right">
      <span class="text-5xl no-select align-super">&lt;/profile&gt;</span>
    </HoverBox>
    <div class="text-white p-20 flex max-h-full justify-center gap-4 projects--cards__container lg:flex-row flex-col">
      <article v-for="project, index in projects"
        class="aspect-square w-full lg:w-2/5 border hover:scale-105 transition-transform relative card">
        <img :src="getImageFile(project.image)" :alt="`project ${project.title} image`"
          class="absolute w-full h-full opacity-25 object-cover">
        <div class="w-full h-full p-8 mix-blend-difference">
          <div>
            <h2 class="text-2xl">{{ project.title }}</h2>
          </div>
          <div class="card-content" v-html="getHTMLfromMD(project.mdFile)"></div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, onMounted } from "vue";
import ContentSection from "../interfaces/ContentSection";
import HoverBox from "./HoverBox.vue";
import { CommandLineIcon as outlineIcon } from "@heroicons/vue/24/outline";
import { CommandLineIcon as solidIcon } from "@heroicons/vue/24/solid";
import showdown from "showdown";
import projects from "../assets/projects/projects.json";

const project_data = import.meta.glob('../assets/projects/*.md', { as: "raw", eager: true });
const project_images = import.meta.glob(
  ['../assets/projects/*.png', '../assets/projects/*.jpg', '../assets/projects/*.jpeg', '../assets/projects/*.gif'], { eager: true, import: "default" }) as Record<string, string>;

onMounted(() => {
  const el = document.getElementById("projects");
  if (el)
    (inject("sections") as Array<ContentSection>).push({ el: el, active: false, icon: [outlineIcon, solidIcon] })
})

const getMDFile = (fileName: string): string => {
  return Object.keys(project_data).find(element => element.includes(fileName)) || ""
}

const getImageFile = (fileName: string): string => {
  return project_images[Object.keys(project_images).find(element => element.includes(fileName)) as keyof typeof project_images]
}

const converter = new showdown.Converter;

const getHTMLfromMD = (fileName: string): string => {
  return converter.makeHtml(project_data[getMDFile(fileName)])
}


</script>

<style>
div.projects--cards__container>article.card:hover>img {
  opacity: 1;
}

div.projects--cards__container > article.card div.card-content a {
  @apply underline;
}
</style>