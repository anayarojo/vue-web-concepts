<template>
	<basic-shape :level="level" :customStyle="computedStyle">
		<slot></slot>
	</basic-shape>
</template>

<script>
import BasicShape from '@/components/BasicShape';
import Utilities from '@/shared/utilities';

export default {
	name: 'BasicBox',
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
			let props = {};
			if (this.size === 'custom') {
				props = {
					height: !this.height ? '8px' : this.height,
					width: !this.width ? '8px' : this.width,
				};
			} else {
				const size = Utilities.getSize(this.size);
				props = {
					height: size,
					width: size,
				};
			}
			props = Object.assign(this.customStyle, props);
			return props;
		},
	},
};
</script>
