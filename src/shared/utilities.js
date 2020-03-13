export default {
	getSize(type) {
		switch (type) {
			case 'xs':
				return '8px';
			case 'sm':
				return '16px';
			case 'md':
				return '32px';
			case 'lg':
				return '64px';
			case 'xl':
				return '128px';
			default:
				return '8px';
		}
	},
};
