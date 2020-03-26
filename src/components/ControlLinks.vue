<template>
	<control-container customClass="navbar-links flex flex-initial w-auto h-auto">
		<control-link
			v-for="link in links"
			:level="level"
			:color="color"
			:key="link.id"
			:link="link"
		/>
	</control-container>
</template>

<script>
import Validators from '@/shared/validators';
import ControlContainer from '@/components/ControlContainer';
import ControlLink from '@/components/ControlLink';

export default {
	name: 'ControlLinks',
	components: {
		ControlContainer,
		ControlLink,
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
	data() {
		return {
			links: [
				{
					key: 1,
					name: '',
					to: '/',
				},
				{
					key: 2,
					name: '',
					to: '/contact',
				},
				{
					key: 3,
					name: '',
					to: '/about',
				},
				{
					key: 4,
					name: '',
					to: '/',
				},
			],
		};
	},
};
</script>
