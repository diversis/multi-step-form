import type { ComponentType } from 'svelte';

export type Step = {
	name: string;
	component: ComponentType;
};

export type Field = {
	name: string;
	placeholder: string;
	error: string;
};

export type Addon = {
	name: string;
	price: { monthly: number; yearly: number };
	description: string;
};
