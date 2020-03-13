<template>
	<div class="shape" :class="computedClass" :style="customStyle">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'BasicShape',
	props: {
		level: {
			type: Number,
			validator: function(value) {
				return value <= 5;
			},
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
			return `shape-level-${this.level}`;
		},
	},
};
</script>

<style lang="scss" scoped>
.shape {
	display: block;
	&.shape-level--1 {
		background-color: transparent;
		border-bottom-color: transparent;
	}
	&.shape-level-0 {
		background-color: darken(#fff, 0);
		border-bottom-color: darken(#fff, 0);
	}
	&.shape-level-1 {
		background-color: darken(#fff, 10%);
		border-bottom-color: darken(#fff, 10);
	}
	&.shape-level-2 {
		background-color: darken(#fff, 20%);
		border-bottom-color: darken(#fff, 20);
	}
	&.shape-level-3 {
		background-color: darken(#fff, 30%);
		border-bottom-color: darken(#fff, 30);
	}
	&.shape-level-4 {
		background-color: darken(#fff, 40%);
		border-bottom-color: darken(#fff, 40);
	}
	&.shape-level-5 {
		background-color: darken(#fff, 50%);
		border-bottom-color: darken(#fff, 50);
	}
}
</style>
