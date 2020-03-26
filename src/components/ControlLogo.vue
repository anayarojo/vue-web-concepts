<template>
	<control-container customClass="logo-wrapper flex flex-auto">
		<!--eslint-disable-next-line prettier/prettier-->
        <router-link to="/">
			<!--eslint-disable-next-line prettier/prettier-->
			<basic-container customClass="logo flex w-auto h-auto py-4">
				<!--eslint-disable-next-line prettier/prettier-->
                <basic-circle :level="level" :color="color" size="md" customClass="logo-icon flex-none mr-2"></basic-circle>
				<!--eslint-disable-next-line prettier/prettier-->
                <basic-box :level="level" :color="color" size="custom" customClass="logo-title rounded-full flex-none w-24 h-8"></basic-box>
			</basic-container>
		</router-link>
	</control-container>
</template>

<script>
import Validators from '@/shared/validators';
import BasicBox from '@/components/BasicBox';
import BasicCircle from '@/components/BasicCircle';
import BasicContainer from '@/components/BasicContainer';
import ControlContainer from '@/components/ControlContainer';

export default {
	name: 'ControlLogo',
	components: {
		BasicBox,
		BasicCircle,
		BasicContainer,
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
	},
};
</script>
