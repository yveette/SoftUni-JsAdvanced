function gradestDivision(a, b) {
    // Write a function that takes two positive numbers as input and compute the greatest common divisor.	
    while (b != 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);
}

gradestDivision(15, 5); // 5
gradestDivision(2154, 458); // 2

/*
function gcd(a, b){
    if (a == 0){
    return b;
    }

    if (b == 0){
    return a;
    }

    if (a == b){
        return a;
    }

    if (a > b){
        return gcd(a-b, b);
    }
    
    return gcd(a, b-a);
}
*/