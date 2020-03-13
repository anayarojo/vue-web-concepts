<template>
	<basic-shape :level="level" :customStyle="computedStyle"></basic-shape>
</template>

<script>
import BasicShape from '@/components/BasicShape';
import Utilities from '@/shared/utilities';

export default {
	name: 'BasicTriangle',
	components: {
		BasicShape,
	},
	props: {
		level: {
			type: Number,
			validator: function(value) {
				return value <= 5;
			},
		},
		size: {
			type: String,
			validator: function(value) {
				return ['xs', 'sm', 'md', 'lg', 'xl', 'custom'].indexOf(value) !== -1;
			},
		},
		customStyle: {
			type: Object,
			default: function() {
				return {};
			},
		},
		height: String,
		width: String,
	},
	computed: {
		computedStyle() {
			let props = Object.assign(this.customStyle, {
				width: 0,
				height: 0,
				backgroundColor: 'transparent',
			});
			if (this.size === 'custom') {
				const width = !this.width ? '8px' : this.width;
				props = {
					borderLeft: `calc(${width}/2) solid transparent`,
					borderRight: `calc(${width}/2) solid transparent`,
					borderBottom: `${!this.height ? '8px' : this.height}`,
				};
			} else {
				const size = Utilities.getSize(this.size);
				props = {
					borderLeft: `calc(${size}/2) solid transparent`,
					borderRight: `calc(${size}/2) solid transparent`,
					borderBottomWidth: `${size}`,
					borderBottomStyle: 'solid',
				};
			}
			props = Object.assign(this.customStyle, props);
			return props;
		},
	},
};
</script>
