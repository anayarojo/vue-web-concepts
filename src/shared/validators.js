export default {
	validLevel(value) {
		return value <= 9;
	},
	validSize(value) {
		return ['xs', 'sm', 'md', 'lg', 'xl', 'custom'].indexOf(value) !== -1;
	},
	validColor(value) {
		return (
			[
				'black',
				'white',
				'gray',
				'red',
				'orange',
				'yellow',
				'green',
				'teal',
				'blue',
				'indigo',
				'purple',
				'pink',
			].indexOf(value) !== -1
		);
	},
};
