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
		it('first item', () => {
			assert.equal(dateList[0].getDate(), startDate.getDate(), 'is same as start date');
			assert.typeOf(dateList[0], 'date', 'is a date type');
		});
		it('last item', () => {
			const later = new Date();
			later.setDate(later.getDate() + 9);

			assert.equal(dateList[9].getDate(), later.getDate(), 'is ten days out from start date');
			assert.typeOf(dateList[9], 'date', 'is a date type');
		});
	});
});
