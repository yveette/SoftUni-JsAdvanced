const { expect } = require('chai');
const numberOperations = require('./app');

describe(`testing numberOperations`, () => {
    describe("test powNumber", function () {
        it("returns the power of number", function () {
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(1)).to.equal(1);
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(3)).to.equal(9);
            expect(numberOperations.powNumber(2.25)).to.equal(5.0625);
            expect(numberOperations.powNumber(-2)).to.equal(4);
        });
    });

    describe("test numberChecker", function () {
        it("throw error for not a number", function () {
            expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker({})).to.throw('The input is not a number!');        
        });
        it("greater than 100 or equal", function () {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
        it("lower than 100", function () {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
        });
    });


    describe("test sumArrays", function () {
        it("equal length arrays", function () {
            expect(numberOperations.sumArrays([0], [1])).to.eqls([1]);
            expect(numberOperations.sumArrays([1], [0])).to.eqls([1]);
            expect(numberOperations.sumArrays([1], [1])).to.eqls([2]);
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.eqls([2, 4, 6]);
        });
        it("no equal length arrays", function () {
            expect(numberOperations.sumArrays([1, 2], [1])).to.eqls([2, 2]);
            expect(numberOperations.sumArrays([1], [1, 2])).to.eqls([2, 2]);

        });
        it("arrays with fload numbers", function () {
            expect(numberOperations.sumArrays([1.25], [1])).to.eqls([2.25]);
            expect(numberOperations.sumArrays([1], [1.25])).to.eqls([2.25]);
            expect(numberOperations.sumArrays([1, 2.2], [1.25])).to.eqls([2.25, 2.2]);
        });

        it("arrays with negative numbers", function () {
            expect(numberOperations.sumArrays([1], [-3])).to.eqls([-2]);
            expect(numberOperations.sumArrays([-3], [1])).to.eqls([-2]);
            expect(numberOperations.sumArrays([1, -2], [1])).to.eqls([2, -2]);
        });
    });
})