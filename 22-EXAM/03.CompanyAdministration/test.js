const { expect } = require('chai');
const companyAdministration = require('./app');

describe(`testing companyAdministration`, () => {
    describe("test hiringEmployee", function () {
        it("test invalid position", function () {
            expect(() => companyAdministration.hiringEmployee()).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('Ivan')).to.throw('We are not looking for workers for this position.');
            expect(() => companyAdministration.hiringEmployee('Ivan', 'a', 5)).to.throw('We are not looking for workers for this position.');
        });

        it("test valid yearsExperience for hiring", function () {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal(`Ivan was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 4)).to.equal(`Ivan was successfully hired for the position Programmer.`);

        });

        it("test invalid yearsExperience", function () {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 0)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', -1)).to.equal(`Ivan is not approved for this position.`);
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1.25)).to.equal(`Ivan is not approved for this position.`);
        });

    });

    describe("test calculateSalary", function () {
        it("salary with bonus", function () {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        });
        it("salary without bonus", function () {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
            expect(companyAdministration.calculateSalary(150)).to.equal(2250);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
            expect(companyAdministration.calculateSalary(1)).to.equal(15);
        });

        it("invalid input hours", function () {
            expect(() => companyAdministration.calculateSalary()).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary('a')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(null)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(undefined)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary([])).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary({})).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary('')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-1.25)).to.throw('Invalid hours');
        });
    });

    describe("test firedEmployee", function () {
        it("invalid array", function () {
            expect(() => companyAdministration.firedEmployee()).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('a', 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(null, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(undefined, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee('', 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(-1, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(1.25, 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(-1.25, 1)).to.throw('Invalid input');
        });
        it("invalid index", function () {
            expect(() => companyAdministration.firedEmployee(['Ivan'], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], -1.25)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], 1.75)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], 1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], 5)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], 20)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan', 'Peter'], 5)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], null)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], undefined)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], {})).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], '')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['Ivan'], 'a')).to.throw('Invalid input');
        });

        it("valid input", function () {
            expect(companyAdministration.firedEmployee(['Ivan'], 0)).to.equal('');
            expect(companyAdministration.firedEmployee(['Ivan', 'Peter'], 0)).to.equal('Peter');
            expect(companyAdministration.firedEmployee(['Ivan', 'Peter'], 1)).to.equal('Ivan');
            expect(companyAdministration.firedEmployee(['Ivan', 'Peter', 'George'], 1)).to.equal('Ivan, George');
        });
    });
})

/*
it("throw error for not a number", function () {
    expect( () => testNumbers.numberChecker('a')).to.throw();

    expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
    expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
    expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!');
    expect(() => numberOperations.numberChecker({})).to.throw('The input is not a number!');
});

    expect(numberOperations.powNumber(0)).to.equal(0);
    expect(numberOperations.sumArrays([0], [1])).to.eqls([1]); // for array -> eqls/eql
    expect(dealership.euroCategory(3)).to.contain('Your euro category is low');
    expect(testNumbers.sumNumbers(1, '1')).to.be.undefined;

*/