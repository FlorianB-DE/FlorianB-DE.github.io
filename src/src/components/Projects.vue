<template>
	<section
		id="projects"
		class="relative overflow-x-hidden"
		data-heading="Projects"
		data-in_viewport=""
	>
		<HoverBox class="bottom-10 right-10 duration-700" data-in_viewport="fade-right">
			<span class="no-select align-super text-5xl">&lt;/profile&gt;</span>
		</HoverBox>
		<div
			class="projects--cards__container flex max-h-full flex-col justify-center gap-4 p-20 text-white lg:flex-row"
		>
			<article
				v-for="(project, index) in projects"
				class="card relative h-fit w-full border transition-transform hover:scale-105 lg:aspect-square lg:w-2/5"
			>
				<img
					:src="getImageFile(project.image)"
					:alt="`project ${project.title} image`"
					class="absolute z-[-1] h-full w-full object-cover opacity-25"
				/>
				<div class="h-full w-full p-8 hover:mix-blend-difference">
					<div>
						<h2 class="text-2xl">{{ project.title }}</h2>
					</div>
					<div class="card-content" v-html="getHTMLfromMD(project.mdFile)" />
				</div>
			</article>
		</div>
	</section>
</template>

<script setup lang="ts">
import { inject, onMounted } from 'vue';
import { CommandLineIcon as outlineIcon } from '@heroicons/vue/24/outline';
import { CommandLineIcon as solidIcon } from '@heroicons/vue/24/solid';
import ContentSection from '../interfaces/ContentSection';
import HoverBox from './HoverBox.vue';
import showdown from 'showdown';
import projects from '../content/projects/projects.json';

const project_data = import.meta.glob('../content/projects/*.md', {
	as: 'raw',
	eager: true
});
const project_images = import.meta.glob(
	[
		'../content/projects/*.png',
		'../content/projects/*.jpg',
		'../content/projects/*.jpeg',
		'../content/projects/*.gif'
	],
	{ eager: true, import: 'default' }
) as Record<string, string>;

onMounted(() => {
	const el = document.getElementById('projects');
	if (el)
		(inject('sections') as Array<ContentSection>).push({
			el: el,
			active: false,
			icon: [outlineIcon, solidIcon]
		});
});

const getMDFile = (fileName: string): string => {
	return Object.keys(project_data).find((element) => element.includes(fileName)) || '';
};

const getImageFile = (fileName: string): string => {
	return project_images[
		Object.keys(project_images).find((element) =>
			element.includes(fileName)
		) as keyof typeof project_images
	];
};

const converter = new showdown.Converter();

const getHTMLfromMD = (fileName: string): string => {
	return converter.makeHtml(project_data[getMDFile(fileName)]);
};
</script>

<style>
div.projects--cards__container > article.card:hover > img {
	opacity: 1;
}

div.projects--cards__container > article.card div.card-content a {
	@apply underline;
}
</style>
