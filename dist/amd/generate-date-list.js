/*generate-date-list@0.0.3#generate-date-list*/
define(['exports'], function (exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.default = function (length, incrementor, startDate) {
        var iterator = generateIterator(incrementor, new Date(startDate));
        return Array.from(Array(length)).map(iterator);
    };
    var generateIterator = exports.generateIterator = function generateIterator(incrementor, startDate) {
        var lastDate = void 0;
        return function () {
            if (lastDate) {
                lastDate = incrementor(new Date(lastDate));
            } else {
                lastDate = startDate;
            }
            return lastDate;
        };
    };
});