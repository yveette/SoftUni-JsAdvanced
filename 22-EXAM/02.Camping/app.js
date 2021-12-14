class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];

        this.listNames = [];
        this.listNamesCondition = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);

        if (condition !== "child" && condition !== "student" && condition !== "collegian") {
            throw new Error(`Unsuccessful registration at the camp.`);
        }

        if (!this.listNames.includes(name)) {
            if (money < this.priceForTheCamp[condition]) {
                return `The money is not enough to pay the stay at the camp.`
            }

            this.listNames.push(name)
            this.listNamesCondition.push({ name, condition });
            this.listOfParticipants.push({
                name,
                condition,
                power: 100,
                wins: 0
            })
            return `The ${name} was successfully registered.`

        } else {
            return `The ${name} is already registered at the camp.`;
        }
    }

    unregisterParticipant(name) {
        if (!this.listNames.includes(name)) {
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        let index = this.listNames.indexOf(name);
        this.listNames.splice(index, 1);

        this.listOfParticipants = this.listOfParticipants.filter(person => person.name != name);
        return `The ${name} removed successfully.`;

    }

    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame == 'WaterBalloonFights') {
            if (!this.listNames.includes(participant1) || !this.listNames.includes(participant2)) {
                throw new Error(`Invalid entered name/s.`)
            }
            let cond1 = ''
            this.listOfParticipants.find(person => {
                if (person.name == participant1) {
                    cond1 = person.condition
                }
            });

            let cond2 = ''
            this.listOfParticipants.find(person => {
                if (person.name == participant2) {
                    cond2 = person.condition
                }
            });

            if (cond1 != cond2) {
                throw new Error(`Choose players with equal condition.`);
            }

            let power1 = 0;
            let power2 = 0;
            this.listOfParticipants.find(person => {
                if (person.name == participant1) {
                    power1 = person.power
                } else if (person.name == participant2) {
                    power2 = person.power
                }
            });

            if (power1 > power2) {
                this.listOfParticipants.find(person => {
                    if (person.name == participant1) {
                        person.wins += 1;
                    }
                });
                return `The ${participant1} is winner in the game ${typeOfGame}.`
            } else if (power1 < power2) {
                this.listOfParticipants.find(person => {
                    if (person.name == participant2) {
                        person.wins += 1;
                    }
                });
                return `The ${participant2} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        } else if (typeOfGame == "Battleship") {
            if (!this.listNames.includes(participant1)) {
                throw new Error(`Invalid entered name/s.`)
            }
            this.listOfParticipants.find(person => {
                if (person.name == participant1) {
                    person.power += 20;
                }
            });
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        
        this.listOfParticipants.sort((a, b) => b.wins - a.wins)

        for (let person of this.listOfParticipants) {
            result.push(`${person.name} - ${person.condition} - ${person.power} - ${person.wins}`);
        }
        return result.join("\n");
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
// Output:
// The money is not enough to pay the stay at the camp.
// The Petar Petarson was successfully registered.
// The Petar Petarson is already registered at the camp.
// Uncaught Error: Unsuccessful registration at the camp.

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
// Output:
// The Petar Petarson was successfully registered.
// Uncaught Error: The Petar is not registered in the camp.
// The Petar Petarson removed successfully.


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
// Output:
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

// console.log(summerCamp.toString());
// Output:
// The Petar Petarson was successfully registered.
// The Petar Petarson successfully completed the game Battleship.
// The Sara Dickinson was successfully registered.
// Uncaught Error: Choose players with equal condition.
// The Dimitur Kostov was successfully registered.
// The Petar Petarson is winner in the game WaterBalloonFights.
// Jane Austen will take 3 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Petar Petarson - student - 120 - 1
// Sara Dickinson - child - 100 - 0
// Dimitur Kostov - student - 100 - 0


let summerCamp = new SummerCamp('Jane Austen', 'Pancharevo Sofia 1137, Bulgaria');
console.log(summerCamp.registerParticipant('Petar Petarson', 'child', 300));
// "The Petar Petarson was successfully registered."
console.log(summerCamp.registerParticipant('Sara Dickinson', 'child', 200));
// "The Sara Dickinson was successfully registered."

console.log(summerCamp.timeToPlay('Battleship', 'Sara Dickinson'))
// "The Sara Dickinson successfully completed the game Battleship."

console.log(summerCamp.timeToPlay('WaterBalloonFights', 'Sara Dickinson','Petar Petarson'))
// "The Sara Dickinson is winner in the game WaterBalloonFights."

console.log(summerCamp.toString())

// `Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria
// Sara Dickinson - child - 120 - 1
// Petar Petarson - child - 100 - 0`