const { expect } = require('chai');
const dealership = require('./app');

describe("Tests dealership function", function () {
    describe("Test newCarCost functionality", function () {

        it("works with discount", function () {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.equal(35000);
            expect(dealership.newCarCost('Audi A6 4K', 50000)).to.equal(30000);
            expect(dealership.newCarCost('Audi A8 D5', 50000)).to.equal(25000);
            expect(dealership.newCarCost('Audi TT 8J', 50000)).to.equal(36000);
        });

        it("works without discount", function () {
            expect(dealership.newCarCost('oldCar', 50000)).to.equal(50000);
        });
    });

    describe("Test carEquipment functionality", function () {
        it("return array with one extra", function () {
            expect(dealership.carEquipment(['heated seats'], [0])).to.eql(['heated seats']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'navigation'], [2])).to.eql(['navigation']);
        });
        it("return array with more extras", function () {
            expect(dealership.carEquipment(['heated seats', 'sliding roof'], [0,1])).to.eql(['heated seats','sliding roof']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'navigation'], [0,2])).to.eql(['heated seats','navigation']);
        });
    });

    describe("Test euroCategory functionality", function () {
        it("test with low euro category", function () {
            expect(dealership.euroCategory(3)).to.contain('Your euro category is low');
        });
        it("test with high euro category and get discount", function () { 
            expect(dealership.euroCategory(4)).to.contain('We have added 5% discount to the final price: 14250.');
        });
    });
});