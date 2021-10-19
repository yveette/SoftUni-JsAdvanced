class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        let className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
    }
    toString() {
        let baseStr = super.toString().slice(0, -1);
        return baseStr + `, course: ${this.course})`;
    }
}



function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human'
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendProrotype(Person);
let p = new Person("Pesho", "email@hit.bg");
console.log(p.toSpeciesString());
// I am a Human. Person (name: Pesho, email: email@hit.bg)

extendProrotype(Student);
let p1 = new Student("Pesho", "email@hit.bg", 'math');
console.log(p1.toSpeciesString());
// I am a Human. Student (name: Pesho, email: email@hit.bg, course: math)
