function carFactory(car) {
    const result = {};

    function getEngine(power) {
        if (power <= 90) {
            return { power: 90, volume: 1800 };
        } else if (power <= 120) {
            return { power: 120, volume: 2400 };
        } else {
            return { power: 200, volume: 3500 };
        }
    }
    
    // Fill new object result
    result.model = car.model;
    result.engine = getEngine(car.power);
    result.carriage = { type: car.carriage, color: car.color };
    
    const properWheelsize = car.wheelsize % 2 == 0 ? car.wheelsize - 1 : car.wheelsize;
    // car.wheelsize = Array(4).fill(properWheelsize);
    result.wheels = new Array(4).fill(properWheelsize, 0, 4);

    return result;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
/*
{
    model: 'VW Golf II',
    engine: {
        power: 90,
        volume: 1800
    },
    carriage: {
        type: 'hatchback',
        color: 'blue'
    },
    wheels: [13, 13, 13, 13]
}
*/


console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));
/*
{ model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17] }
*/
