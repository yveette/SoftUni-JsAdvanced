const { expect } = require('chai');
const { StringBuilder } = require("./13.StringBuilder");

describe("Test StringBuilder Class functionality", () => {
    describe('constructor', () => {
        it('correct init', () => {
            const str1 = new StringBuilder('hell');
            expect(str1 instanceof StringBuilder).to.be.true;
            expect(str1._stringArray.join('')).to.be.equal('hell');
            const str2 = new StringBuilder();
            expect(str2._stringArray.length).to.be.equal(0);
        });

        it('incorrect init', () => {
            expect(() => { str1 = new StringBuilder(1) })
                .throw(TypeError, 'Argument must be a string');
            expect(() => { str2 = new StringBuilder([]) })
                .throw(TypeError, 'Argument must be a string');
            expect(() => { str3 = new StringBuilder({}) })
                .throw(TypeError, 'Argument must be a string');
        });

    });

    describe('methods', () => {
        it('toString', () => {
            const str1 = new StringBuilder('hell');
            expect(str1.toString()).to.be.equal('hell')
        });

        it('append', () => {
            const str1 = new StringBuilder('hell');
            str1.append(' ok')
            expect(str1.toString()).to.be.equal('hell ok')
        });

        it('prepend', () => {
            const str1 = new StringBuilder('hell');
            str1.prepend('ok ')
            expect(str1.toString()).to.be.equal('ok hell')
        });

        it('insertAt', () => {
            const str1 = new StringBuilder('hell');
            str1.insertAt('ooo', 2)
            expect(str1.toString()).to.be.equal('heoooll');
        });

        it('remove', () => {
            const str1 = new StringBuilder('hell');
            str1.remove(1, 2)
            expect(str1.toString()).to.be.equal('hl');
        });

        it('incorrect string for methods', () => {
            const str1 = new StringBuilder('hell');
            expect(() => { str1.append(1) })
                .throw(TypeError, 'Argument must be a string');
            expect(() => { str1.prepend(1) })
                .throw(TypeError, 'Argument must be a string');
            expect(() => { str1.insertAt(1, 1) })
                .throw(TypeError, 'Argument must be a string');

        });

        it('toString works correct', () => {
            const expected = '\n A \n\r B\t123   ';
            const obj = new StringBuilder();

            expected.split('').forEach(s => { obj.append(s); obj.prepend(s); });
            obj.insertAt('test', 4);
            obj.remove(2, 4);
            expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
        });
    });
});