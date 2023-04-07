<template>
	<div class="h-1/2 w-full border-collapse border">
		<slot :name="current" />
	</div>
	<div class="flex h-1/2 w-full">
		<div class="h-full w-1/2 border-collapse border">
			<slot :name="current + 1" />
		</div>
		<div class="h-full w-1/2 border-collapse border">
			<SliderElement v-if="max > current + 2" :max="max" :current="current + 2" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{ max: number; current: number }>();
</script>
