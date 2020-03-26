<template>
	<basic-circle :level="level" :color="color" :size="size" />
</template>

<script>
import Validators from '@/shared/validators';
import BasicCircle from '@/components/BasicCircle';

export default {
	name: 'WebIcon',
	components: {
		BasicCircle,
	},
	props: {
		level: {
			type: Number,
			default: 2,
			validator: Validators.validLevel,
		},
		color: {
			type: String,
			default: 'white',
			validator: Validators.validColor,
		},
		size: {
			type: String,
			default: 'md',
			validator: Validators.validSize,
		},
	},
};
</script>
