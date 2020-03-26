<template>
	<web-text
		:level="level"
		:color="color"
		:weight="weight"
		:size="size"
		:customClass="customClass"
		:customStyle="customStyle"
	></web-text>
</template>

<script>
import Defaults from '@/shared/defaults';
import Validators from '@/shared/validators';
import WebText from '@/components/WebText';

export default {
	name: 'ControlTitle',
	components: {
		WebText,
	},
	props: {
		level: {
			type: Number,
			default: 7,
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
};
</script>
