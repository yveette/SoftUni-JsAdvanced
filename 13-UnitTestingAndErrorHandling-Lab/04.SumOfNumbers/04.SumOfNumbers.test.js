const { expect } = require('chai');

const sum = require('./04.SumOfNumbers');

describe('Testing Summing function', () => {
    it('returns true for symmetric array', () => {
        expect(sum([])).to.equal(0);
    });

    it('calculates 1 element', () => {
        expect(sum([1])).to.equal(1);
    });

    it('calculates 2 elements', () => {
        expect(sum([1, 1])).to.equal(2);
    });

    it('returns NaN if one element of array is not a number', () => {
        expect(isNaN(sum(["a"]))).to.equal(true);
    });
});