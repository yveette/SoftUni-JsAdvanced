function population(arrTowns) {
    // iterate input
    // parse entries
    // store data
    // print result

    const towns = {};

    for (let data of arrTowns) {
        /*
        let [name, population] = data.split(' <-> ');
        population = Number(population);
        */

        const tokens = data.split(' <-> ');
        const name = tokens[0];
        let population = Number(tokens[1]);

        /*
        if (towns[name] == undefined) {
            towns[name] = population;
        } else {
            towns[name] += population;
        }
        */

        if (towns[name]) {
            population += towns[name];
        }
        towns[name] = population;

    }

    /*
    for (const name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
    */

    for (const [name, pop] of Object.entries(towns)) {
        console.log(`${name} : ${pop}`);
    }
}

population(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
/*
Sofia : 1200000
Montana : 20000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
*/

console.log('------------');

population(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);
/*
Istanbul : 101000
Honk Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
*/