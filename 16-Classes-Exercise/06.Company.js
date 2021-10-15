class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || !salary || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = []
        }
        this.departments[department].push({ name, position, salary });

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let currentBest = {
            name: '',
            salary: 0,
        }

        for (let depKey in this.departments) {
            let averageSalary = 0;
            for (let empKey in this.departments[depKey]) {
                averageSalary += this.departments[depKey][empKey].salary;
            }
            averageSalary = averageSalary / this.departments[depKey].length;

            if (currentBest.salary < averageSalary) {
                currentBest.name = depKey;
                currentBest.salary = averageSalary;
            }
        }

        this.departments[currentBest.name].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let bestDepString = '';
        bestDepString += `Best Department is: ${currentBest.name}\n`;
        bestDepString += `Average salary: ${currentBest.salary.toFixed(2)}\n`;

        this.departments[currentBest.name].forEach(el => {
            // removing the last \n
            if (this.departments[currentBest.name].indexOf(el) == this.departments[currentBest.name].length - 1) {
                bestDepString += `${el.name} ${el.salary} ${el.position}`;
            } else {
                bestDepString += `${el.name} ${el.salary} ${el.position}\n`;
            }
            // or --- > return bestDepString.trim();
        });

        return bestDepString;
    }
}


let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());
/* Output :
Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Stanimir 2000 engineer
Pesho 1500 electrical engineer
Slavi 500 dyer
*/