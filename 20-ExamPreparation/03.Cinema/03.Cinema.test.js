const { expect } = require('chai');
// const test = {
//     showMovies,
//     ticketPrice,
//     swapSeatsInHall
// } = require('./03.Cinema');


const cinema = {
    showMovies: function (movieArr) {

        if (movieArr.length == 0) {
            return 'There are currently no movies to show.';
        } else {
            let result = movieArr.join(', ');
            return result;
        }

    },
    ticketPrice: function (projectionType) {

        const schedule = {
            "Premiere": 12.00,
            "Normal": 7.50,
            "Discount": 5.50
        }
        if (schedule.hasOwnProperty(projectionType)) {
            let price = schedule[projectionType];
            return price;
        } else {
            throw new Error('Invalid projection type.')
        }

    },
    swapSeatsInHall: function (firstPlace, secondPlace) {
        if (!Number.isInteger(firstPlace) || firstPlace <= 0 || firstPlace > 20 ||
            !Number.isInteger(secondPlace) || secondPlace <= 0 || secondPlace > 20 ||
            firstPlace === secondPlace) {
            return "Unsuccessful change of seats in the hall.";
        } else {
            return "Successful change of seats in the hall.";
        }

    }
};


/////////////////////////////////////////////

describe("Tests cinema", function () {
    describe("showMovies", function () {
        it("empty array", function () {
            expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });
        it("array of movies", function () {
            expect(cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])).to.be.equal("King Kong, The Tomorrow War, Joker");
        });
        it("array of single movie", function () {
            expect(cinema.showMovies(["King Kong"])).to.be.equal("King Kong");
        });
    });

    describe("ticketPrice", function () {
        it("Premiere", function () {
            expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
        });
        it("Normal", function () {
            expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
        });
        it("Discount", function () {
            expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
        it("throw error for invalid input", function () {
            // to throm Error it must be in function
            expect(() => cinema.ticketPrice('Invalid')).to.throw('Invalid projection type.')
        });
    });

    describe("swapSeatsInHall", function () {
        it("only one param", function () {
            expect(cinema.swapSeatsInHall(1)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("floating number", function () {
            expect(cinema.swapSeatsInHall(1.25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 1.25)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("greater than 20", function () {
            expect(cinema.swapSeatsInHall(25, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(25, 26)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 25)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("negative number", function () {
            expect(cinema.swapSeatsInHall(-5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, -5)).to.be.equal("Unsuccessful change of seats in the hall.");
    
        });
        it("zero given as number", function () {
            expect(cinema.swapSeatsInHall(0, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(5, 0)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("equal numbers", function () {
            expect(cinema.swapSeatsInHall(5, 5)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        it("invalid input", function () {
            expect(cinema.swapSeatsInHall('abc', null)).to.be.equal("Unsuccessful change of seats in the hall.");
        });
        

        it("negative number", function () {
            expect(cinema.swapSeatsInHall(5, 10)).to.be.equal("Successful change of seats in the hall.");
        });
        it("1 and 20", function () {
            expect(cinema.swapSeatsInHall(1,20)).to.be.equal("Successful change of seats in the hall.");
        });
    });
});
