<template>
	<!--eslint-disable-next-line prettier/prettier-->
	<basic-box :level="level" :color="color" size="custom" :customClass="computedClass" :customStyle="computedStyle" />
</template>

<script>
import Defaults from '@/shared/defaults';
import Utilities from '@/shared/utilities';
import Validators from '@/shared/validators';
import BasicBox from '@/components/BasicBox';

export default {
	name: 'WebText',
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
			default: 'gray',
			validator: Validators.validColor,
		},
		weight: {
			type: String,
			default: 'xs',
			validator: Validators.validSize,
		},
		size: {
			type: String,
			default: 'xs',
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
	},
	computed: {
		computedClass() {
			const weightClass = Utilities.getTextWeightClass(this.weight);
			const sizeClass = Utilities.getTextSizeClass(this.size);
			return `web-text ${sizeClass} ${weightClass} ${this.customClass}`;
		},
		computedStyle() {
			const style = {};
			return Object.assign(this.customStyle, style);
		},
	},
};
</script>
