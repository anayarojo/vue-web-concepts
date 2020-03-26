<template>
	<!--eslint-disable-next-line prettier/prettier-->
	<basic-box :level="backgroundLevel" :color="backgroundColor" size="custom" customClass="navbar w-full h-16">
		<!--eslint-disable-next-line prettier/prettier-->
		<basic-container customClass="navbar-content flex flex-wrap w-9/12 h-auto mx-auto">
			<control-logo :level="logoLevel" :color="logoColor" />
			<control-links :level="linksLevel" :color="linksColor" />
		</basic-container>
	</basic-box>
</template>

<script>
import Validators from '@/shared/validators';
import BasicBox from '@/components/BasicBox';
import BasicContainer from '@/components/BasicContainer';
import ControlLogo from '@/components/ControlLogo';
import ControlLinks from '@/components/ControlLinks';

export default {
	name: 'ControlNavbar',
	components: {
		BasicBox,
		BasicContainer,
		ControlLogo,
		ControlLinks,
	},
	props: {
		logoLevel: {
			type: Number,
			default: 2,
			validator: Validators.validLevel,
		},
		logoColor: {
			type: String,
			default: 'gray',
			validator: Validators.ValidColor,
		},
		backgroundLevel: {
			type: Number,
			default: 7,
			validator: Validators.validLevel,
		},
		backgroundColor: {
			type: String,
			default: 'blue',
			validator: Validators.ValidColor,
		},
		linksLevel: {
			type: Number,
			default: 1,
			validator: Validators.validLevel,
		},
		linksColor: {
			type: String,
			default: 'white',
			validator: Validators.ValidColor,
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
