function aggegate(arr) {
    let sum = 0;
    let inversedSum = 0;
    let stringNumbers = '';

    for (let el of arr) {
        stringNumbers += el;

        el = Number(el);
        sum += el;

        let inversedEl = 1 / el;
        inversedSum += inversedEl;
    }

    console.log(sum);
    console.log(inversedSum);
    console.log(stringNumbers);
}

aggegate([1, 2, 3]);
/*
6
1.8333
123
*/

aggegate([2, 4, 8, 16]);
/*
30
0.9375
24816
*/
