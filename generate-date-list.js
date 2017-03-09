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
export default function (length, incrementor, startDate = new Date()) {
	const iterator = generateIterator(incrementor, startDate);
	return Array.from(Array(length))
		.map(iterator);
}
