<template>
	<!--eslint-disable-next-line prettier/prettier-->
	<control-container customClass="navbar-link ml-2 w-auto h-auto py-6">
		<router-link :to="link.to">
			<basic-box
				:level="level"
				:color="color"
				size="custom"
				customClass="navbar-link-title rounded-full flex-none w-20 h-4"
			></basic-box>
		</router-link>
	</control-container>
</template>

<script>
import Validators from '@/shared/validators';
import BasicBox from '@/components/BasicBox';
import ControlContainer from '@/components/ControlContainer';

export default {
	name: 'ControlLink',
	components: {
		BasicBox,
		ControlContainer,
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
		link: {
			type: Object,
			default: function() {
				return {};
			},
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
			return this.customClass;
		},
		computedStyle() {
			const style = {};
			return Object.assign(this.customStyle, style);
		},
	},
};
</script>
