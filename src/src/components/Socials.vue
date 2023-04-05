<template>
	<aside class="fixed bottom-0 z-10 h-20 w-full">
		<div class="relative h-full w-full">
			<figure
				class="background-bar absolute inset-x-28 bottom-0 z-0 flex h-full xl:bg-gray-900"
			></figure>
			<menu
				class="absolute inset-x-40 z-10 flex h-full items-center justify-center gap-x-24 text-white"
			>
				<li>
					<a href="https://gitlab.ruhr-uni-bochum.de/flo" target="_blank"
						><img :src="gitlabIcon" alt="gitlab icon"
					/></a>
				</li>
				<li>
					<a href="https://github.com/FlorianB-DE" target="_blank"
						><img :src="githubIcon" alt="github icon"
					/></a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/florianb-de" target="_blank"
						><img :src="linkedinIcon" alt="linkedin icon"
					/></a>
				</li>
			</menu>
		</div>
	</aside>
</template>
<script lang="ts" setup>
import gitlabIcon from '../assets/gitlab.svg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/LinkedIn.png';
</script>
<style>
.background-bar {
	transform: perspective(10px) rotateX(0.4deg);
}

img {
	@apply aspect-square w-12;
}
</style>
