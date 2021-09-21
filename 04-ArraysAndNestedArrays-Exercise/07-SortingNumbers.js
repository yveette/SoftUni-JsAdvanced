function sortingNumbers(arr) {
    arr = arr.sort((a, b) => a - b);

    let result = [];
    while (arr.length != 0) {
        result.push(arr.shift(), arr.pop())
    }

    // or:
    /*
    let count = Math.floor(arr.length/2);
    for (let i = 0; i < count; i++) {
        result.push(arr[i]);
        result.push(arr[arr.length - 1 - i])
    }
    */
    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

