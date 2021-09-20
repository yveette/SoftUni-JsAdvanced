function negOrPosNum(arr) {
    let result = [];

    for (let el of arr) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result.join('\n'));
}

negOrPosNum([7, -2, 8, 9]);
/*
-2
7
8
9
*/

console.log('---------------');

negOrPosNum([3, -2, 0, -1]);
/*
-1
-2
3
0
*/