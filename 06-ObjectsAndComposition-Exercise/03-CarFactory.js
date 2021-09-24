function carFactory(car) {
    engine = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    };

    carriage = {
        "hatchback": { type: 'hatchback', color: '' },
        "coupe": { type: 'coupe', color: '' }
    };

    if (car.power <= 90) {
        car.engine = engine["Small engine"];
    } else if (car.power <= 120) {
        car.engine = engine["Normal engine"];
    } else {
        car.engine = engine["Monster engine"];
    }
    delete car.power

    if (car.carriage == 'hatchback') {
        car.carriage = carriage.hatchback;
        carriage.hatchback.color = car.color;
        delete car.color;
    } else if (car.carriage == 'coupe') {
        car.carriage = carriage.coupe;
        carriage.coupe.color = car.color;
        delete car.color;
    }

    if (car.wheelsize % 2 == 0) {
        car.wheelsize = car.wheelsize - 1;
    }
    car.wheels = Array(4).fill(car.wheelsize);
    delete car.wheelsize

    return car;
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
    wheelsize: 16
}));
/*
{ model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17] }
*/
