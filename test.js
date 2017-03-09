import 'steal-mocha';
import { assert } from 'chai';

import generateDateList from 'generate-date-list';

const incrementor = function (lastDate) {
	lastDate.setDate(lastDate.getDate() + 1);
	return lastDate;
};

let startDate = new Date();
let dateList;

describe('generate-date-list', () => {
	describe('when generating 10 dates', () => {
		before(() => {
			dateList = generateDateList(10, incrementor, startDate);
		});
		it('returns array with length 10', () => {
			assert.equal(dateList.length, 10);
		});
		it('first item is start date', () => {
			assert.equal(dateList[0], startDate);
		});
		it('last item is ten days out', () => {
			const later = new Date();
			later.setDate(later.getDate() + 9);

			assert.equal(dateList[9].getDate(), later.getDate());
		});
	});
});
