<template>
	<section id="home" class="relative" data-heading="Home" data-in_viewport="">
		<HoverBox class="left-10 top-32 duration-700" data-in_viewport="fade-left">
			<span class="no-select align-super text-5xl">&lt;profile&gt;</span>
		</HoverBox>
	</section>
</template>

<script lang="ts" setup>
import HoverBox from './HoverBox.vue';
import { inject, onMounted } from 'vue';
import ContentSection from '../interfaces/ContentSection';
import { HomeIcon as outlineIcon } from '@heroicons/vue/24/outline';
import { HomeIcon as solidIcon } from '@heroicons/vue/24/solid';

onMounted(() => {
	const el = document.getElementById('home');
	if (el)
		(inject('sections') as Array<ContentSection>).push({
			el: el,
			active: true,
			icon: [outlineIcon, solidIcon]
		});
});
</script>

<style scoped></style>
