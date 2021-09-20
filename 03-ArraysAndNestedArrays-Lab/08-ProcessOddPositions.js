function oddPositions(arr) {
    /*
        const oddNumbers = arr.filter((v, i) => i % 2 == 1);
        const doubled = oddNumbers.map(x => x * 2);
        doubled.reverse();
        console.log(doubled.join(' '));
    */
}

const solve = (arr) => arr
    .filter((v, i) => i % 2 == 1)
    // v = 10 and i = 0 (index)
    // v = 3 and i = 0 (index)
    .map(x => x * 2)
    .reverse()
    .join(' ');

console.log(solve([10, 15, 20, 25])); // 50 30
console.log(solve([3, 0, 10, 4, 7, 3])); // 6 8 0
