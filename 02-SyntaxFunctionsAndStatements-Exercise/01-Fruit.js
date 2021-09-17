function calcFruits(fruit, weight, money) {
    const moneyNeeded = (weight / 1000) * money;
    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

calcFruits('orange', 2500, 1.80);
// I need $4.50 to buy 2.50 kilograms orange.
calcFruits('apple', 1563, 2.35);
// I need $3.67 to buy 1.56 kilograms apple.