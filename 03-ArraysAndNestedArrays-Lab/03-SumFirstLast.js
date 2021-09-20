function sumFirstLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    return first + last;
}

sumFirstLast(['20', '30', '40']); // 60
sumFirstLast(['5', '10']); // 15
sumFirstLast(['25']); // Nan
/*
copy the array:
let first = Number([...arr].shift());
let last = Number([...arr].pop());
sumFirstLast(['25']); // 50
*/

