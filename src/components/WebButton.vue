<template>
	<basic-box
		:level="level"
		:color="color"
		:customClass="computedClass"
		:customStyle="computedStyle"
		size="custom"
	/>
</template>

<script>
import Defaults from '@/shared/defaults';
import Validators from '@/shared/validators';
import Utilities from '@/shared/utilities';
import BasicBox from '@/components/BasicBox';

export default {
	name: 'WebButton',
	components: {
		BasicBox,
	},
	props: {
		level: {
			type: Number,
			default: 2,
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
			return `web-button rounded-full ${sizeClass} ${weightClass} ${this.customClass}`;
		},
	},
};
</script>
