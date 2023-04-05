<template>
	<aside class="absolute z-10 p-5 font-extralight text-white">
		<slot />
	</aside>
</template>
<script lang="ts" setup></script>
<style scoped>
aside {
	border: 10px solid;
	border-image-slice: 1;
	border-width: 5px;
	border-image-source: linear-gradient(to right, #59198d, #9fa7ff);
}
</style>
