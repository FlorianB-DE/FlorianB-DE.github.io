<template>
	<article class="preview card relative h-fit w-full border lg:aspect-square lg:w-2/5">
		<slot :name="activePreview" />
	</article>
	<div class="articles card relative flex h-fit w-full flex-col border lg:aspect-square lg:w-2/5">
		<SliderElement :max="max" :current="0">
			<template slot:0="">
				<span>test</span>
			</template>
		</SliderElement>
	</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import SliderElement from './SliderElement.vue';

const props = defineProps<{ max: number }>();

const activePreview = ref(0);
</script>
<style>
div.projects--cards__container > article.card div.card-content a {
	@apply underline;
}
</style>
