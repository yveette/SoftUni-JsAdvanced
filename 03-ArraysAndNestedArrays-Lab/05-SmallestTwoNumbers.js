function smallestTwoNums(arr) {
    let sorted = arr.sort((a, b) => a - b);
    console.log(sorted.slice(0, 2).join(' '));
}

smallestTwoNums([30, 15, 50, 5]); // 5 15

smallestTwoNums([3, 0, 10, 4, 7, 3]); // 0 3


