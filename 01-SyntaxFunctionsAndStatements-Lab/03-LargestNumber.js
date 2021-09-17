function largestNum(a,b,c){
    console.log(`The largest number is ${Math.max(a,b,c)}.`);
}

/*
function largestNum(a, b, c) {
    let result;

    if (a > b) {
        if (a > c) {
            result = a;
        } else {
            result = c;
        }
    } else if (b > c) {
        result = b;
    } else {
        result = c;
    }

    console.log(`The largest number is ${result}.`);
}
*/

largestNum(5, -3, 16); // 16
largestNum(-3, -5, -22.5); // -3
