<template>
	<!--eslint-disable-next-line prettier/prettier-->
	<basic-shape :level="level" :color="color" :customClass="computedClass" :customStyle="computedStyle">
		<slot></slot>
	</basic-shape>
</template>

<script>
import Utilities from '@/shared/utilities';
import Defaults from '@/shared/defaults';
import Validators from '@/shared/validators';
import BasicShape from '@/components/BasicShape';

export default {
	name: 'BasicBox',
	components: {
		BasicShape,
	},
	props: {
		level: {
			type: Number,
			default: 2,
			validator: Validators.validLevel,
		},
		color: {
			type: String,
			validator: Validators.validColor,
		},
		size: {
			type: String,
			validator: Validators.validSize,
		},
		customClass: {
			type: String,
			default: '',
		},
		customStyle: {
			type: Object,
			default: Defaults.defaultObject,
		},
		width: {
			type: Number,
			default: 0,
		},
		height: {
			type: Number,
			default: 0,
		},
	},
	computed: {
		computedClass() {
			if (this.size !== 'custom') {
				const sizeClass = Utilities.getSizeClass(this.size);
				return `${this.customClass} w-${sizeClass} h-${sizeClass}`;
			}
			return this.customClass;
		},
		computedStyle() {
			const style = {};
			if (this.width > 0) style.width = `${this.width}PX`;
			if (this.height > 0) style.height = `${this.height}px`;
			return Object.assign(this.customStyle, style);
		},
	},
};
</script>
