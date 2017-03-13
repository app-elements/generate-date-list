export const generateIterator = function (incrementor, startDate) {
	let lastDate;
	return function () {
		if (lastDate) {
			lastDate = incrementor(new Date(lastDate));
		} else {
			lastDate = startDate;
		}
		return lastDate;
	};
};

// Generate data list
export default function (length, incrementor, startDate) {
	const iterator = generateIterator(incrementor, new Date(startDate));
	return Array.from(Array(length))
		.map(iterator);
}
