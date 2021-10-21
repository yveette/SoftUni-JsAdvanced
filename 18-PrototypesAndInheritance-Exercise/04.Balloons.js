function solution() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = Number(hasWeight);
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this._ribbon = {
                color: ribbonColor,
                length: Number(ribbonLength)
            }
        }
        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon: Balloon,
        PartyBalloon: PartyBalloon,
        BirthdayBalloon: BirthdayBalloon
    }
}


let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
// Balloon {color: 'yellow', hasWeight: 20.5}
console.log(testPartyBalloon);
// PartyBalloon {color: 'yellow', hasWeight: 20.5, _ribbon: {color: 'red', length: 10.25}}
console.log(ribbon);
// {color: 'red', length: 10.25}