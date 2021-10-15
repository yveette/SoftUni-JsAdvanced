class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }

    add(element) {
        this.numbers.push(element);
        this.size += 1;
        this.numbers.sort((a, b) => a - b);
    }

    get(index) {
        this.outOfBoundCheck(index);
        return this.numbers[index];
    }

    remove(index) {
        this.outOfBoundCheck(index);
        this.numbers.splice(index, 1);
        this.size -= 1;
    }

    outOfBoundCheck(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error('No such index in list');
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
