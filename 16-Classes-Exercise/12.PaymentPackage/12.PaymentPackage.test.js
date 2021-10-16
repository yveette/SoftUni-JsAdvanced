const { expect, assert } = require('chai');
const { PaymentPackage } = require("./12.PaymentPackage");

describe("Test PaymentPackage Class functionality", () => {
    describe("Tests for the name", () => {
        it("constructor", () => {
            let instance = new PaymentPackage('Name', 100);

            assert.equal(instance._name, 'Name', '1');
            assert.equal(instance._value, 100, '3');
            assert.equal(instance._VAT, 20, '4');
            assert.equal(instance._active, true, '5');
        });

        it("Should throw error when the name is a number", () => {
            expect(() => new PaymentPackage(1, 1)).to.throw('Name must be a non-empty string');
        });
        it("Should throw error when the name is an array", () => {
            expect(() => new PaymentPackage(['asd'], 1)).to.throw('Name must be a non-empty string');
        });
        it("Should throw error when the name is empty", () => {
            expect(() => new PaymentPackage('', 1)).to.throw('Name must be a non-empty string');
        });
        it("Should return the name if it is a string", () => {
            expect(() => new PaymentPackage('asd', 1)).not.to.throw('Name must be a non-empty string');
        });
    })

    describe("Tests for the value", () => {
        it("Should throw error when the value is a string", () => {
            expect(() => new PaymentPackage('asd', 'asd')).to.throw('Value must be a non-negative number');
        });
        it("Should throw error when the value is an array", () => {
            expect(() => new PaymentPackage('asd', [1])).to.throw('Value must be a non-negative number');
        });
        it("Should throw error when the value is negative", () => {
            expect(() => new PaymentPackage('asd', -1)).to.throw('Value must be a non-negative number');
        });
        it("Should return the value is it is a number", () => {
            expect(() => new PaymentPackage('asd', 1)).not.to.throw('Value must be a non-negative number');
        });

        it('Set value to null', () => {
            let instance = new PaymentPackage('Name', 100);
            assert.doesNotThrow(() => { instance.value = 0 })
        });
    });

    describe("Tests for the VAT", () => {
        it('Should throw errow when the VAT is a string', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = 'abc').to.throw('VAT must be a non-negative number');
        });
        it('Should throw errow when the VAT is an array', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = [123]).to.throw('VAT must be a non-negative number');
        });
        it('Should throw errow when the VAT is negative', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = -123).to.throw('VAT must be a non-negative number');
        });
        it('Should return the VAT if the input is good', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.VAT = 123).not.to.throw('VAT must be a non-negative number');
        });
    });

    describe('Tests for the Active', () => {
        it('Should throw errow when the Active is a string', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = 'a').to.throw('Active status must be a boolean');
        });
        it('Should throw errow when the Active is an array', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = [1]).to.throw('Active status must be a boolean');
        });
        it('Should throw errow when the Active is negative', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = -1).to.throw('Active status must be a boolean');
        });
        it('Should return the Active if the input is good', () => {
            let flagClass = new PaymentPackage('abc', 123);
            expect(() => flagClass.active = true).not.to.throw('Active status must be a boolean');
        });
    });

    describe('Tests for toString Method', () => {
        it('1.Should return a string if all inputs are correct', () => {
            let flagClass = new PaymentPackage('abc', 123);
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
        it('2.Should return a string if all inputs are correct', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            let output = [
                `Package: abc`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
        it('3.Should return a string if all inputs are correct', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
        it('4.Should return a string if all inputs are correct', () => {
            let flagClass = new PaymentPackage('abc', 123);
            flagClass.VAT = 30;
            flagClass.active = false;
            let output = [
                `Package: abc (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    });
});
