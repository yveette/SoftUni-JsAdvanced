function store(arr) {
    const catalogue = {};

    arr.forEach((el) => {
        let [product, price] = el.split(' : ');
        price = Number(price);
        let letter = product[0];

        if (!catalogue[letter]) {
            catalogue[letter] = {};
        }
        catalogue[letter][product] = price;
    });

    let sorted = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const key of sorted) {
        let products = Object.entries(catalogue[key])
            .sort((a, b) => a[0].localeCompare(b[0]));

        // sorted by price:
        // let products = Object.entries(catalogue[key])
        //     .sort((a, b) => b[1] - a[1]);

        console.log(key);

        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        });
    }
}

store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
/*
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/

console.log('-----------');

store(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);
/*
B
  Banana: 2
  Barrel: 10
P
  Pesho: 0.000001
R
  Rali Car: 2000000
  Raspberry P: 4999
  Rolex: 100000
  Rollon: 10
  Rubic's Cube: 5
*/