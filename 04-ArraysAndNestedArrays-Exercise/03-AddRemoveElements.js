function addRemove(arr) {
    let result = [];
    let num = 1;

    arr.forEach((el) => {
        if (el == "add") {
            result.push(num);
        } else {
            result.pop();
        }
 
        num++;
    })
 
    if (result.length === 0) {
        console.log("Empty")
    } else {
        console.log(result.join("\n"));
    }
}

addRemove(['add',
    'add',
    'add',
    'add']
);
/*
1
2
3
4
*/

console.log('--------');

addRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);
/*
1
4
5
*/

console.log('--------');

addRemove(['remove',
    'remove',
    'remove']
);
/*
Empty
*/

