<template>
	<div class="about">
		<!--eslint-disable-next-line prettier/prettier-->
		<web-text :level="4" color="gray" weight="md" size="xs" customClass="mb-4"></web-text>
		<!--eslint-disable-next-line prettier/prettier-->
		<basic-triangle :level="4" color="blue" size="xl" customClass="mx-auto"></basic-triangle>
	</div>
</template>

<script>
import BasicTriangle from '@/components/BasicTriangle.vue';
import WebText from '@/components/WebText.vue';
// import WebImage from '@/components/WebImage.vue';

export default {
	name: 'Home',
	components: {
		BasicTriangle,
		WebText,
		// WebImage,
	},
};
</script>
