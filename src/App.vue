<template>
	<div id="app">
		<control-hero>
			<control-navbar />
			<!--eslint-disable-next-line prettier/prettier-->
			<control-container customClass="hero-content flex flex-col w-9/12 h-auto mx-auto pt-8">
				<!--eslint-disable-next-line prettier/prettier-->
				<web-text :level="2" color="gray" weight="md" size="xs" customClass="mb-4"></web-text>
				<web-text :level="4" color="gray" weight="sm" size="lg"></web-text>
			</control-container>
		</control-hero>
		<!--eslint-disable-next-line prettier/prettier-->
		<basic-box :level="0" color="white" size="custom" customClass="main-container rounded-md w-9/12 h-auto min-h-3/4 mx-auto -mt-16 mb-16  p-6">
			<router-view />
		</basic-box>
	</div>
</template>

<script>
import BasicBox from '@/components/BasicBox.vue';
import ControlHero from '@/components/ControlHero.vue';
import ControlNavbar from '@/components/ControlNavbar.vue';
import ControlContainer from '@/components/ControlContainer.vue';
import WebText from '@/components/WebText.vue';

export default {
	name: 'app',
	components: {
		BasicBox,
		ControlHero,
		ControlNavbar,
		ControlContainer,
		WebText,
	},
};
</script>

<style>
body {
	padding: 0;
	margin: auto;
	background-color: #f1f1f1;
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
