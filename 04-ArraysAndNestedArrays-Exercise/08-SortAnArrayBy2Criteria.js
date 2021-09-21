function sortBy2(arr) {
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    /*
    if (a.length > b.length) {
        return 1;
    } else if (a.length == b.length) {
        return a.localeCompare(b);
    } else {
        return -1
    }
    */
   
    for (let el of sorted) {
        console.log(el);
    }
}

sortBy2(['alpha',
    'beta',
    'gamma']
);
/*
beta
alpha
gamma
*/
console.log('----------');

sortBy2(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
/*
Jack
Isacc
George
Theodor
Harrison
*/

console.log('----------');

sortBy2(['test',
    'Deny',
    'omen',
    'Default']
);
/*Deny
omen
test
Default
*/