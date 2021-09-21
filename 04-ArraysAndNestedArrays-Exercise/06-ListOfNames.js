function listNames(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b));

    // Sort them alphabetically in ascending order
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }

    // or:
    /*
    let orderNumber = 1;
    arr.forEach((el)=> {
        console.log(`${orderNumber}.${el}`);
        orderNumber++;
    })
    */
}


listNames(["John", "Bob", "Christina", "Ema"]);
/*
1.Bob
2.Christina
3.Ema
4.John
*/