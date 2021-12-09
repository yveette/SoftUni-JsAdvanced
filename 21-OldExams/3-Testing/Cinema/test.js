const { expect } = require('chai');
const cinema = require('./app');

describe("Tests cinema function", function () {
    // [‘King Kong’, ‘The Tomorrow War’, ‘Joker’,etc.]
    describe("Test showMovies functionality", function () {
        it("test with empty array", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("test with array with one element", function () {
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        });
        it("test with array with two elements", function () {
            expect(cinema.showMovies(['King Kong', 'Joker'])).to.equal('King Kong, Joker');
            expect(cinema.showMovies(['King Kong', 'Joker', 'Moon'])).to.equal('King Kong, Joker, Moon');
        });
    });

    describe("Test ticketPrice functionality", function () {
        it("works with valid type - premiere", function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it("works with valid type - normal", function () {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it("works with valid type discount", function () {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it("throw an error for invalid type", function () {
            expect(() => cinema.ticketPrice('a')).to.throw('Invalid projection type.');
        });
    });

    describe("Test swapSeatsInHall functionality", function () {
        it("one param - throw an error ", function () {
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.25)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("floating numbers - throw an error ", function () {
            expect(cinema.swapSeatsInHall(1.25, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1.25)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.3, 1.2)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("greater than 20 - throw an error ", function () {
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(22, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(22, 23)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("negative - throw an error ", function () {
            expect(cinema.swapSeatsInHall(-1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-2, -1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("zero - throw an error ", function () {
            expect(cinema.swapSeatsInHall(0,1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0,0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("equal - throw an error ", function () {
            expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("invalid - throw an error ", function () {
            expect(cinema.swapSeatsInHall()).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('a',null)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, '')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('', 1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("works with valid input data", function () {
            expect(cinema.swapSeatsInHall(1,2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5,1)).to.equal('Successful change of seats in the hall.');
        });
    });
});