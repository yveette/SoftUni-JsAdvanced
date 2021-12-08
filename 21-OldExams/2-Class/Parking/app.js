class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length >= this.capacity) {
            throw new Error("Not enough parking space.")
        }

        this.vehicles.push({
            carModel,
            carNumber,
            payed: false
        });

        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        // or:
        // let currCar = this.vehicles.find(car => car.carNumber == carNumber);
        // if( !currCar )
        if (this.vehicles.some(car => car.carNumber == carNumber) == false) {
            throw new Error("The car, you're looking for, is not found.");
        }

        let checked;
        for (let car of this.vehicles) {
            if (car.carNumber == carNumber) {
                checked = car.payed;
            }
        }
        // or:
        // if( !currCar.payed)
        if (checked == false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles = this.vehicles.filter(car => car.carNumber != carNumber);
            return `${carNumber} left the parking lot.`;
        }
    }

    pay(carNumber) {
        // or:
        // let currCar = this.vehicles.find(car => car.carNumber == carNumber);
        if (this.vehicles.some(car => car.carNumber == carNumber) == false) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }

        let checked
        for (let car of this.vehicles) {
            if (car.carNumber == carNumber) {
                checked = car.payed;
            }
        }
        // or:
        // if( currCar.payed)
        if (checked == true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        } else {
            for (let car of this.vehicles) {
                if (car.carNumber == carNumber) {
                    car.payed = true;
                }
            }
            return `${carNumber}'s driver successfully payed for his stay.`;
        }
    }

    getStatistics(carNumber) {
        const result = [];
        if (carNumber == undefined) {
            result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
            this.vehicles = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            this.vehicles.forEach(car => result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`));
        } else {
            // or use find
            let car = (this.vehicles.filter(car => car.carNumber == carNumber))[0];
            result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`)
        }

        return result.join('\n');
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));


// Output:
// The Volvo t600, with a registration number TX3691CA, parked.
// The Parking Lot has 11 empty spots left.
// Volvo t600 == TX3691CA - Not payed
// TX3691CA's driver successfully payed for his stay.
// TX3691CA left the parking lot.
