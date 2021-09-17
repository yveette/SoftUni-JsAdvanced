// Cartesian coordinate system 
function validity(x1, y1, x2, y2) {
    x1 = Number(x1);
    y1 = Number(y1);
    x2 = Number(x2);
    y2 = Number(y2);

    function distance(x1, y1, x2, y2) {
        let distX = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distX**2 + distY**2);
    }

    if ( Number.isInteger(distance(x1, y1, 0, 0))){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validity(3, 0, 0, 4);
/*
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid
*/

console.log('------------');

validity(2, 1, 1, 1);
/*
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid
*/


/*
function validityChecker(x1,y1,x2,y2){
    const isValid = (x1,y1,x2,y2) => Math.sqrt((y2 - y1) **2 + (x2 - x1) **2) % 1 === 0 ? 'valid' : 'invalid';
    const print = (x1,y1,x2,y2) => console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(x1,y1,x2,y2)}`);
    print(x1,y1,0,0);
    print(x2,y2,0,0);
    print(x1,y1,x2,y2);
}
*/