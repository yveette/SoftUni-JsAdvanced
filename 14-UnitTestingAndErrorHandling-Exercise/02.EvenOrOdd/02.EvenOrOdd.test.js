const { expect } = require('chai');
const { sum, isOddOrEven } = require("./module");

describe("Test oddOrEven", () => {
    it("Test invalid input", () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it("Test if odd is returned", () => {
        expect(isOddOrEven('asd')).to.be.string("odd");
    });

    it("Test if even is returned", () => {
        expect(isOddOrEven('asdf')).to.be.equal("even");
        expect(isOddOrEven('')).to.be.equal("even");
    });
})