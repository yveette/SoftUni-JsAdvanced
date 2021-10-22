const { expect } = require('chai');
const testNumbers = require('./03.TestNumbers');

describe("Tests TestNumbers function", function () {
    describe("Test sumNumber functionality", function () {
        it("Works with number parameters", function () {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
        });
        it("Works with negative parameters", function () {
            expect(testNumbers.sumNumbers(-2, 1)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(2, -1)).to.equal('1.00');
            expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00');
        });

        it("Works with floating point parameters", function () {
            expect(testNumbers.sumNumbers(1.25, 1.251)).to.equal('2.50');
            expect(testNumbers.sumNumbers(1.21, 1.318)).to.equal('2.53');
        });

        it("invalid parameters return undefined", function () {
            expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 1)).to.be.undefined;
            expect(testNumbers.sumNumbers('1', '1')).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 1)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
        });
    });

    describe("Test numberChecker functionality", function () {
        it("Invalid input", function () {
            expect( () => testNumbers.numberChecker('a')).to.throw();
        });
        it("Valid odd input", function () {
            expect(testNumbers.numberChecker(1)).to.equal("The number is odd!");
        });
        it("Valid even input", function () {
            expect(testNumbers.numberChecker(2)).to.equal("The number is even!");
        });
        it("Valid odd input as string", function () {
            expect(testNumbers.numberChecker("1")).to.equal("The number is odd!");
        });
        it("Valid even input as string", function () {
            expect(testNumbers.numberChecker("2")).to.equal("The number is even!");
        });

    });

    describe("Test averageSumArray functionality", function () {
        it("Average sum of array with 1 number", function () {
            expect(testNumbers.averageSumArray([1])).to.equal(1);
        });
        it("Average sum of array with numbers", function () {
            expect(testNumbers.averageSumArray([1,1])).to.equal(1);
            expect(testNumbers.averageSumArray([1,2,3,-1])).to.equal(1.25);
            expect(testNumbers.averageSumArray([1,-1,-1,-1,-2])).to.equal(-0.8);
        });
    });
});

// it("Average sum of empty array", function () {
//     expect(testNumbers.averageSumArray([])).to.equal(NaN);
// });