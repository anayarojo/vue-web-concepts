<template>
	<!--eslint-disable-next-line prettier/prettier-->
	<basic-box :level="-1" size="custom" :customClass="computedClass" :customStyle="computedStyle">
		<slot></slot>
	</basic-box>
</template>

<script>
import BasicBox from '@/components/BasicBox';

export default {
	name: 'ControlContainer',
	components: {
		BasicBox,
	},
	props: {
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
			return `control-container ${this.customClass}`;
		},
		computedStyle() {
			const style = {};
			return Object.assign(this.customStyle, style);
		},
	},
};
</script>
