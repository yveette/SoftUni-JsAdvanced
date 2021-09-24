function lowesrPrices(arr) {
    let catalogue = {};

    arr.forEach((el) => {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (!catalogue[product]) {
            catalogue[product] = {};
        }

        catalogue[product][town] = price;

    });

    for (const product in catalogue) {
        const sorted = Object.entries(catalogue[product]).sort((a, b) => a[1] - b[1]);

        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

lowesrPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
/*
Sample Product -> 1000 (Sample Town)
Orange -> 2 (Sample Town)
Peach -> 1 (Sample Town)
Burger -> 10 (New York)
*/