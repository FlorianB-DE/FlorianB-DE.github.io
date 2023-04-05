<template>
	<section
		id="me"
		class="flex flex-row overflow-hidden portrait:flex-wrap"
		data-heading="About Me"
		data-in_viewport=""
	>
		<article
			class="mt-20 pl-10 text-white duration-1000 portrait:order-1 portrait:h-1/3 landscape:h-full landscape:w-1/3"
			data-in_viewport="fade-left"
		>
			<p class="text-2xl opacity-60">this is some sample text</p>
		</article>
		<figure
			class="flex w-full flex-col items-center justify-center overflow-hidden duration-700 xl:w-1/3 portrait:order-3 portrait:h-2/3 landscape:h-full"
		>
			<div class="part">
				<div
					class="head relative flex h-24 flex-col items-center justify-center rounded-b-[10%] rounded-t-[40%] bg-amber-100"
				>
					<img class="absolute top-[-10px] w-[20rem]" id="hair" src="" />
					<div class="eyes mt-4 flex w-full justify-around">
						<div class="eye circle flex h-5 w-5 border-2 border-white bg-green-800">
							<div class="circle m-auto aspect-square w-1.5 bg-black" />
						</div>
						<div class="eye circle flex h-5 w-5 border-2 border-white bg-green-800">
							<div class="circle m-auto aspect-square w-1.5 bg-black" />
						</div>
					</div>
					<div class="flex w-full justify-center pt-4">
						<div class="mouth h-5 w-[50%] rounded-b-[50%] rounded-t bg-red-400"></div>
					</div>
				</div>
			</div>
			<div class="part">
				<div class="arm relative z-0 h-32 rotate-[50deg] rounded-2xl bg-amber-100" />
				<div class="body zinde z-[1] h-40 rounded-3xl bg-green-600" />
				<div class="arm right relative z-0 h-32 rotate-[-45deg] rounded-2xl bg-amber-100" />
			</div>
		</figure>
		<article
			class="mt-20 pr-10 text-right text-white duration-1000 portrait:order-2 portrait:h-1/3 landscape:h-full landscape:w-1/3"
			data-in_viewport="fade-right"
		>
			<p class="text-2xl opacity-60">this is some sample text</p>
		</article>
	</section>
</template>

<script lang="ts" setup>
import { inject, onMounted } from 'vue';
import ContentSection from '../interfaces/ContentSection';
import hair from '../assets/hair.png';
import { InformationCircleIcon as outlineIcon } from '@heroicons/vue/24/outline';
import { InformationCircleIcon as solidIcon } from '@heroicons/vue/24/solid';

onMounted(() => {
	const el = document.getElementById('me');
	if (el) {
		(inject('sections') as Array<ContentSection>).push({
			el: el,
			active: false,
			icon: [outlineIcon, solidIcon]
		});
		(el.querySelector('#hair') as HTMLImageElement).src = hair;
	}
});
</script>

<style scoped>
.part {
	@apply flex w-full justify-center;
}

.head {
	width: min(6rem, 22.5%);
}

.head #hair {
	transform: scale(1.3, 1.3);
}
.mouth {
	border: 3px inset #3a0000;
}

.arm {
	aspect-ratio: 1/4;
}

.arm::after {
	content: '';
	@apply absolute bottom-[-45%] left-[150%] z-10 h-32 w-full rotate-90 rounded-2xl bg-amber-100;
}

.right::after {
	animation: shake 1s ease-in-out infinite;
}

.body {
	width: min(8rem, 30%);
}
@media (orientation: portrait) {
	article {
		flex: 0 0 50%;
	}

	figure {
		flex: 0 0 100%;
	}
}
</style>
