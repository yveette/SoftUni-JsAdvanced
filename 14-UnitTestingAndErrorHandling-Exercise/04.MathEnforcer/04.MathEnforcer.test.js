const { expect } = require('chai');
const { mathEnforcer } = require("./module");

describe("Test mathEnforcer functionality", () => {

    describe('Test mathEnforcer addFive functionality', () => {
        it("Expect undefined on wrong input type", () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });

        it("Expect proper number outcome", () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
            expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
        });
    })


    describe('Test mathEnforcer subtractTen functionality', () => {
        it("Expect undefined on wrong input type", () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });

        it("Expect proper number outcome", () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
            expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
        });

    })


    describe('Test mathEnforcer sum functionality', () => {
        it("Expect undefined on wrong input type", () => {
            expect(mathEnforcer.sum('5', 10)).to.be.undefined;
            expect(mathEnforcer.sum(5, '10')).to.be.undefined;
            expect(mathEnforcer.sum([], '')).to.be.undefined;
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
            expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
        });

        it("Expect proper number outcome", () => {
            expect(mathEnforcer.sum(5,5)).to.be.equal(10);
            expect(mathEnforcer.sum(20,-20)).to.be.equal(0);
            expect(mathEnforcer.sum(20,-30)).to.be.equal(-10);
            expect(mathEnforcer.sum(5.05,5)).to.be.closeTo(10.05, 0.01);
            expect(mathEnforcer.sum(1.1,1.1)).to.be.equal(2.2);
        });
    })
})