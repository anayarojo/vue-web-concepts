<template>
	<div id="app">
		<basic-box :level="4" size="custom" width="100%" height="512px">
			<basic-box :level="5" size="custom" width="100%" height="64px">
				<!--eslint-disable-next-line prettier/prettier-->
				<basic-box :level="5" size="custom" width="90%" height="auto" :customStyle="navbarStyle">
					<basic-circle :level="2" size="md"></basic-circle>
					<basic-box
						:level="2"
						size="custom"
						width="124px"
						height="32px"
					></basic-box>
				</basic-box>
			</basic-box>
		</basic-box>
		<!--eslint-disable-next-line prettier/prettier-->
		<basic-box :level="0" size="custom" width="90%" height="auto" :customStyle="containerStyle">
			<basic-box :level="1" size="lg"></basic-box>
			<basic-box :level="1" size="lg"></basic-box>
			<basic-box :level="1" size="lg"></basic-box>
		</basic-box>
		<router-view />
		<!-- <div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about">About</router-link>
		</div> -->
		<router-view />
	</div>
</template>

<script>
import BasicCircle from '@/components/BasicCircle.vue';
import BasicBox from '@/components/BasicBox.vue';

export default {
	name: 'app',
	components: {
		BasicBox,
		BasicCircle,
	},
	computed: {
		containerStyle() {
			return {
				margin: '-64px auto',
				minHeight: '512px',
				overflow: 'hidden',
				padding: '16px',
			};
		},
		navbarStyle() {
			return {
				margin: '0 auto',
				padding: '16px',
			};
		},
	},
};
</script>

<style>
body {
	padding: 0;
	margin: auto;
	background-color: #f1f1f1;
}
</style>
