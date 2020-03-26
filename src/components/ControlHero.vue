<template>
	<!--eslint-disable-next-line prettier/prettier-->
	<basic-box :level="level" size="custom" :color="color" :customClass="computedClass" :customStyle="computedStyle">
		<slot></slot>
	</basic-box>
</template>

<script>
import Validators from '@/shared/validators';
import BasicBox from '@/components/BasicBox';

export default {
	name: 'ControlHero',
	components: {
		BasicBox,
	},
	props: {
		level: {
			type: Number,
			default: 5,
			validator: Validators.validLevel,
		},
		color: {
			type: String,
			default: 'blue',
			validator: Validators.validColor,
		},
		customClass: {
			type: String,
			default: '',
		},
		customStyle: {
			type: Object,
			default: function() {
				return {};
			},
		},
	},
	computed: {
		computedClass() {
			return `hero w-full h-64 ${this.customClass}`;
		},
		computedStyle() {
			const style = {};
			return Object.assign(this.customStyle, style);
		},
	},
};
</script>
