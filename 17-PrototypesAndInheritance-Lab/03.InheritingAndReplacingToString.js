function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            return `Person (name: ${this.name}, email: ${this.email})`;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
        toString() {
            let personStr = super.toString().slice(6, -1);
            return  'Teacher' + personStr + `, subject: ${this.subject})`;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
        toString() {
            let personStr = super.toString().slice(6, -1);
            return  'Student' + personStr + `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

let classes = personAndTeacher();
let Person = classes.Person;
let Teacher = classes.Teacher;
let Student = classes.Student;

let t = new Teacher("Ivan",'ivan@ivan.com',"Graphics");
// expect(t.toString()).to.equal('Teacher (name: Ivan, email: ivan@ivan.com, subject: Graphics)');
console.log(t.toString())

let s = new Student("Ivan",'ivan@ivan.com',5);
console.log(s.toString())





