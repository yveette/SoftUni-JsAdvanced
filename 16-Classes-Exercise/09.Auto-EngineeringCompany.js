function carRegister(arr) {
    let register = {};

    for (let el of arr) {
        const [car, model, count] = el.split(' | ');

        if (!register[car]) {
            register[car] = {}
        }
        if (!register[car][model]) {
            register[car][model] = 0;
        }
        register[car][model] += Number(count)
    }

    let result = [];
    Object.entries(register).forEach((brand) => {
        result.push(brand[0]);
        Object.entries(brand[1]).forEach((el) => {
            result.push(`###${el[0]} -> ${el[1]}`);
        })
    })
    console.log(result.join("\n"));
}

carRegister(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);
/*Audi
###Q7 -> 1000
###Q6 -> 100
BMW
###X5 -> 1000
###X6 -> 100
Citroen
###C4 -> 145
###C5 -> 10
Volga
###GAZ-24 -> 1000000
Lada
###Niva -> 1000000
###Jigula -> 1000000
*/