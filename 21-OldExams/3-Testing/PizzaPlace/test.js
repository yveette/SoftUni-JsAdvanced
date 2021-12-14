const { expect } = require('chai');
const pizzUni = require('./app');

describe("Tests PizzaPlace function", function () {
    describe("Test makeAnOrder functionality", function () {
        it("With invalid obj content => throw error", function () {
            // expect(() => pizzUni.makeAnOrder()).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => pizzUni.makeAnOrder({})).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => pizzUni.makeAnOrder({orderedDrink: 'drink' })).to.throw('You must order at least 1 Pizza to finish the order.');
        });
        it("Works with valid obj content",  () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita', orderedDrink: 'Coke' })).to.equal(`You just ordered Margarita and Coke.`);
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita' })).to.contains(`You just ordered Margarita`);
        });
    });

    describe("Test getRemainingWork functionality", function () {
        it("Return pizza status", function () {
            expect(pizzUni.getRemainingWork([{ pizzaName: 'pizza', status: 'ready' }])).to.equal('All orders are complete!');
            expect(pizzUni.getRemainingWork([{ pizzaName: 'pizza1', status: 'ready' }, { pizzaName: 'pizza2', status: 'ready' }])).to.equal('All orders are complete!');

            expect(pizzUni.getRemainingWork([{ pizzaName: 'pizza', status: 'preparing' }])).to.contains('preparing', 'pizza');
            expect(pizzUni.getRemainingWork([{ pizzaName: 'pizza1', status: 'preparing' }, { pizzaName: 'pizza12', status: 'preparing' }])).to.contains('preparing', 'pizza1', 'pizza2');
        });
    });

    describe("Test orderType functionality", function () {
        it("Works with 10% discount", function () {
            expect(pizzUni.orderType(20, 'Carry Out')).to.equal(18);
        });
        it("Works with no discount", function () {
            expect(pizzUni.orderType(20, 'Delivery')).to.equal(20);
        });
        it("Works with floating numbers", function () {
            expect(pizzUni.orderType(10.5, 'Delivery')).to.equal(10.5);
            expect(pizzUni.orderType(10.5, 'Carry Out')).to.equal(9.45);
        });
    });
});
