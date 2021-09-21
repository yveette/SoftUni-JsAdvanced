function extract(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = [];

    arr.forEach((el) => {
        if (el >= biggest) {
            result.push(el);
            biggest = el;
        }
    })

    return result;

    // Other way with filter:
    /*
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = arr.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;
        }
        return false;
    });
    return result;
    */


    // Other way with reduce:
    /*
    let biggest = Number.MIN_SAFE_INTEGER;

    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }

        return accumulated;
    }, result)

    return result;
    */
}


console.log(extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
// [1, 3, 8, 10, 12, 24]

console.log(extract([1,
    2,
    3,
    4]
));
// [1, 2, 3, 4]

console.log(extract([20,
    3,
    2,
    15,
    6,
    1]
));
    // [20]