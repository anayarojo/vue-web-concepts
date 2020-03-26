<template>
	<!--eslint-disable-next-line prettier/prettier-->
	<basic-box :level="backgroundLevel" :color="backgroundColor" size="custom" :customClass="computedClass" :customStyle="computedStyle">
		<basic-triangle
			:level="level"
			:color="color"
			:size="size"
			customClass="mx-2"
		></basic-triangle>
		<basic-box
			:level="level"
			:color="color"
			:size="size"
			customClass="mx-2"
		></basic-box>
		<basic-circle
			:level="level"
			:color="color"
			:size="size"
			customClass="mx-2"
		></basic-circle>
	</basic-box>
</template>

<script>
import Validators from '@/shared/validators';
import Defaults from '@/shared/defaults';
import BasicBox from '@/components/BasicBox';
import BasicCircle from '@/components/BasicCircle';
import BasicTriangle from '@/components/BasicTriangle';

export default {
	name: 'WebImage',
	components: {
		BasicBox,
		BasicCircle,
		BasicTriangle,
	},
	props: {
		level: {
			type: Number,
			default: 4,
			validator: Validators.validLevel,
		},
		color: {
			type: String,
			default: 'blue',
			validator: Validators.validColor,
		},
		size: {
			type: String,
			default: 'md',
			validator: Validators.validSize,
		},
		customClass: {
			type: String,
			default: 'w-full h-32',
		},
		customStyle: {
			type: Object,
			default: Defaults.defaultObject,
		},
		backgroundLevel: {
			type: Number,
			default: 2,
			validator: Validators.validLevel,
		},
		backgroundColor: {
			type: String,
			default: 'gray',
			validator: Validators.validColor,
		},
	},
	computed: {
		computedClass() {
			return `flex flex-row items-center justify-center ${this.customClass} p-4`;
		},
		computedStyle() {
			const style = {};
			return Object.assign(this.customStyle, style);
		},
	},
};
</script>
