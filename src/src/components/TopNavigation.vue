<template>
	<nav
		class="fixed top-0 z-50 flex w-full flex-row p-2 text-white"
		:class="{ closed: !open }"
		ref="nav"
	>
		<div class="ml-auto flex w-3/4 justify-between lg:w-full lg:justify-start">
			<a
				v-for="(item, n) in items"
				:key="item.el.id"
				class="no-select icon ml-2 mr-2 cursor-pointer"
				@click="dispatcher(item)"
				:style="`--item-no: ${n}`"
			>
				<span
					:class="item.active ? 'font-bold' : ''"
					class="hidden text-2xl lg:inline"
					v-text="item.el.getAttribute('data-heading')"
				/>
				<component
					:is="item.icon[Number(item.active)]"
					class="inline aspect-square w-12 align-sub opacity-100 delay-[inherit] duration-[inherit] lg:hidden"
				/>
			</a>
		</div>
		<a class="absolute" @click="toggleMenu">
			<Bars3Icon
				class="open btn absolute inline aspect-square w-12 align-sub transition-transform lg:hidden"
				ref="openButton"
				:class="{ active: !open }"
			/>
			<XMarkIcon
				class="close btn absolute inline aspect-square w-12 align-sub transition-transform lg:hidden"
				:class="{ active: open }"
			/>
		</a>
	</nav>
</template>

<script lang="ts" setup>
import { inject, PropType, ref, onMounted } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import ContentSection from '../interfaces/ContentSection';

const nav = ref<HTMLElement | null>(null);
const openButton = ref<HTMLElement | null>(null);

onMounted(() => openButton.value?.classList.add('init'));

const activeSection = inject('activeSection') as () => ContentSection;

let open = ref(true);

defineProps({
	items: {
		type: Object as PropType<Array<ContentSection>>,
		required: true
	}
});

const toggleMenu = () => {
	open.value = !open.value;
	if (!openButton.value) return;

	openButton.value.classList.remove('init');
};

const dispatcher = (item: ContentSection) => {
	activeSection().active = false;
	item.active = true;
	item.el.scrollIntoView();
};
</script>

<style scoped>
nav {
	--time-scale-multiplier: 1;
}

.open:not(.active) {
	transform: translateX(-100vw) !important;
}

.close:not(.active) {
	animation: gelatine linear calc(1.5s * var(--time-scale-multiplier));
	animation-delay: calc(150ms * var(--time-scale-multiplier));
	transform: translateX(-100vw);
}

.close.active {
	transform: translateX(0);
}

.init {
	transform: translateX(-100vw) !important;
	animation: unset !important;
}

.icon {
	transition-delay: calc(160ms * var(--time-scale-multiplier) * var(--item-no));
	transition-property: transform;
	transition-duration: calc(1s * var(--time-scale-multiplier));
}

.closed .icon {
	transform: translateX(-100vw);
}

.closed .icon > svg {
	transition: transform calc(1s * var(--time-scale-multiplier))
			calc(160ms * var(--time-scale-multiplier) * var(--item-no)),
		opacity calc(275ms * var(--time-scale-multiplier) * (var(--item-no) + 1))
			calc(160ms * var(--time-scale-multiplier) * var(--item-no));
	transform: scale(0%);
	opacity: 0;
}

.close:not(.active),
.open.active {
	transition-delay: calc(1s * var(--time-scale-multiplier)) !important;
}

.btn {
	transition-duration: calc(500ms * var(--time-scale-multiplier));
}
</style>
