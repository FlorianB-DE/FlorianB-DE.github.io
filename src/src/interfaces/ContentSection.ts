import { FunctionalComponent, HTMLAttributes, VNodeProps } from 'vue';

export default interface ContentSection {
	el: HTMLElement;
	icon: Array<FunctionalComponent<HTMLAttributes & VNodeProps, {}>>;
	active: boolean;
}
