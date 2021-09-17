function circle(r) {
    let result = r ** 2 * Math.PI;
    if (typeof (r) == 'number') {
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (r)}.`);
    }
}

circle(5) // 78.54
circle('name') // We can not calculate the circle area, because we receive a string.