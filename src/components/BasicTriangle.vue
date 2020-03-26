<template>
	<basic-shape
		:level="0"
		:customClass="computedClass"
		:customStyle="computedStyle"
	></basic-shape>
</template>

<script>
import Utilities from '@/shared/utilities';
import Defaults from '@/shared/defaults';
import Validators from '@/shared/validators';
import BasicShape from '@/components/BasicShape';

export default {
	name: 'BasicTriangle',
	components: {
		BasicShape,
	},
	props: {
		level: {
			type: Number,
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
			const borderColorClass = Utilities.getBorderColorClass(
				this.level,
				this.color
			);
			return `${this.customClass} bg-transparent ${borderColorClass}`;
		},
		computedStyle() {
			const style = {};
			const size = Utilities.getSize(this.size);
			const sizeX = this.size !== 'custom' ? size / 2 : this.width / 2;
			const sizeY = this.size !== 'custom' ? size : this.height;

			style.width = `${sizeX}px`;
			style.height = `${sizeX}px`;
			style.borderLeft = `${sizeX}px solid transparent !important`;
			style.borderLeft = `${sizeX}px solid transparent !important`;
			style.borderRight = `${sizeX}px solid transparent !important`;
			style.borderBottomWidth = `${sizeY}px`;
			style.borderBottomStyle = 'solid';

			return Object.assign(this.customStyle, style);
		},
	},
};
</script>
