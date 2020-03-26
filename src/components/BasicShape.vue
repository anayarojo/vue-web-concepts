<template>
	<div class="shape" :class="computedClass" :style="customStyle">
		<slot></slot>
	</div>
</template>

<script>
import Defaults from '@/shared/defaults';
import Validators from '@/shared/validators';
import Utilities from '@/shared/utilities';

export default {
	name: 'BasicShape',
	props: {
		level: {
			type: Number,
			validator: Validators.validLevel,
		},
		color: {
			type: String,
			validator: Validators.validColor,
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
			const backgroundColorClass = Utilities.getBackgroundColorClass(
				this.level,
				this.color
			);
			return `${this.customClass} ${backgroundColorClass}`;
		},
	},
};
</script>
