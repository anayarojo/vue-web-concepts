<template>
	<div class="about">
		<!--eslint-disable-next-line prettier/prettier-->
		<web-text :level="4" color="gray" weight="md" size="xs" customClass="mb-4"></web-text>
		<!--eslint-disable-next-line prettier/prettier-->
		<basic-circle :level="4" color="blue" size="xl" customClass="mx-auto"></basic-circle>
	</div>
</template>

<script>
// import BasicBox from '@/components/BasicBox.vue';
import BasicCircle from '@/components/BasicCircle.vue';
import WebText from '@/components/WebText.vue';
// import WebImage from '@/components/WebImage.vue';

export default {
	name: 'Home',
	components: {
		// BasicBox,
		BasicCircle,
		WebText,
		// WebImage,
	},
};
</script>
