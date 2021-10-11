function createCard(face, suit) {
    // Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
    // Valid card suits are: S (♠), H (♥), D (♦), C (♣)

    // \u2660 – Spades(♠)
    // \u2665 – Hearts(♥)
    // \u2666 – Diamonds(♦)
    // \u2663 – Clubs(♣)

    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (faces.includes(face) === false) {
        throw new Error('Invalid face: ' + face);
    }
    if (Object.keys(suits).includes(suit) == false) {
        throw new Error('Invalid suit: ' + suit);
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    }
}

console.log(createCard('A', 'S').toString()); // A♠
console.log(createCard('10', 'H').toString()); // 10♥
console.log(createCard('1', 'C').toString()); // Error
console.log(createCard('9', 'Y').toString()); // Error