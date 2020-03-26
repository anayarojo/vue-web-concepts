export default {
	getBackgroundColorClass(level, color = null) {
		if (color == null || level < 0) return 'bg-transparent';
		if (color == 'black' || color == 'white') return `bg-${color}`;
		return `bg-${color}-${level * 100}`;
	},
	getBorderColorClass(level, color = null, position = null) {
		if (color == null || level < 0) return 'border-transparent';
		if (color == 'black' || color == 'white') return `border-${color}`;
		if (position == null) return `border-${color}-${level * 100}`;
		return `border-${position}-${color}-${level * 10}`;
	},
	getSize(type) {
		switch (type) {
			case 'xs':
				return 8;
			case 'sm':
				return 16;
			case 'md':
				return 32;
			case 'lg':
				return 64;
			case 'xl':
				return 128;
			default:
				return 8;
		}
	},
	getSizeClass(type) {
		switch (type) {
			case 'xs':
				return '2';
			case 'sm':
				return '4';
			case 'md':
				return '8';
			case 'lg':
				return '16';
			case 'xl':
				return '32';
			default:
				return '2';
		}
	},
	getLargeSizeClass(type) {
		switch (type) {
			case 'xs':
				return '4';
			case 'sm':
				return '8';
			case 'md':
				return '16';
			case 'lg':
				return '32';
			case 'xl':
				return '64';
			default:
				return '4';
		}
	},
	getWidthClass(type) {
		switch (type) {
			case 'xs':
				return 'w-2';
			case 'sm':
				return 'w-4';
			case 'md':
				return 'w-8';
			case 'lg':
				return 'w-16';
			case 'xl':
				return 'w-32';
			default:
				return 'w-2';
		}
	},
	getHeightClass(type) {
		switch (type) {
			case 'xs':
				return 'h-2';
			case 'sm':
				return 'h-4';
			case 'md':
				return 'h-8';
			case 'lg':
				return 'h-16';
			case 'xl':
				return 'h-32';
			default:
				return 'h-2';
		}
	},
	getLevelFromSize(type) {
		switch (type) {
			case 'xs':
				return 1;
			case 'sm':
				return 2;
			case 'md':
				return 3;
			case 'lg':
				return 4;
			case 'xl':
				return 5;
			default:
				return 1;
		}
	},
	getSizeFromLevel(type) {
		switch (type.toString()) {
			case '1':
				return 'xs';
			case '2':
				return 'sm';
			case '3':
				return 'md';
			case '4':
				return 'lg';
			case '5':
				return 'xl';
			default:
				return 'xs';
		}
	},
	getTextWeightClass(type) {
		switch (type) {
			case 'xs':
				return 'h-4';
			case 'sm':
				return 'h-6';
			case 'md':
				return 'h-8';
			case 'lg':
				return 'h-10';
			case 'xl':
				return 'h-12';
			default:
				return 'h-4';
		}
	},
	getTextSizeClass(type) {
		switch (type) {
			case 'xs':
				return 'w-3/12';
			case 'sm':
				return 'w-4/12';
			case 'md':
				return 'w-6/12';
			case 'lg':
				return 'w-9/12';
			case 'xl':
				return 'w-full';
			default:
				return 'w-3/12';
		}
	},
};
