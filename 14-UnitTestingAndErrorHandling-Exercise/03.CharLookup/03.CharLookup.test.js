const { expect } = require('chai');
const { lookupChar } = require("./module");

describe("Char Lookup", () => {
    it("Test invalid input", () => {
        expect(lookupChar(0, 0)).to.be.undefined;
        expect(lookupChar('0', '0')).to.be.undefined;
        expect(lookupChar('a', 1.1)).to.be.undefined;
    });

    it("Test if value of the index is incorrect ", () => {
        expect(lookupChar('a', -1)).to.be.equal("Incorrect index");
        expect(lookupChar('a', 1)).to.be.equal("Incorrect index");
    });

    it("Test string and index are correct", () => {
        expect(lookupChar('a', 0)).to.be.equal('a');
        expect(lookupChar('asd', 1)).to.be.equal('s');
    });
})