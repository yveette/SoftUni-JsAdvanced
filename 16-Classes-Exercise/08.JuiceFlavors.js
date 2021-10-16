function juiceCounter(arr) {
    let juices = {};
    let juiceBottles = {};

    for (let el of arr) {
        const [juice, count] = el.split(' => ');

        if (!juices[juice]) {
            juices[juice] = 0;
        }
        juices[juice] += Number(count);


        if (juices[juice] >= 1000) {
            if (!juiceBottles[juice]) {
                juiceBottles[juice] = 0;
            }
            let count = 0;
            while (juices[juice] >= 1000) {
                juices[juice] -= 1000;
                count++;
            }
            juiceBottles[juice] += count;
        }
    }

    Object.entries(juiceBottles)
        .forEach((el) => {
            console.log(`${el[0]} => ${el[1]}`);
        })
}

juiceCounter(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
// Orange => 2
// Peach => 2

juiceCounter(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
// Pear => 8
// Watermelon => 10
// Kiwi => 4
