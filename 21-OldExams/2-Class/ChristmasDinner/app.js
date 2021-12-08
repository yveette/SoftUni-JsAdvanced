class ChristmasDinner {
    constructor(budget) {
        this._budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(n) {
        if (n < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.budget = n;
    }

    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes({ recipeName, productsList }) {
        // productsList.forEach(pr => {
        //     if (this.products.includes(pr) == false) {
        //         throw new Error('We do not have this product');
        //     }
        // });
        if (!productsList.every(product => this.products.includes(product))) {
            throw new Error('We do not have this product')
        }
        this.dishes.push({ recipeName, productsList });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (this.guests[name] != undefined) {
            throw new Error('This guest has already been invited');
        }

        if (this.dishes.find(d => d.recipeName == dish) == undefined) {
            throw new Error('We do not have this dish');
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        return Object.entries(this.guests)
            .map(([name, dish]) => `${name} will eat ${dish}, which consists of ${this.dishes.find(r => r.recipeName == dish).productsList.join(', ')}`)
            .join('\n');
    }
}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');

dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

/* Output:
Ivan will eat Oshav, which consists of Fruits, Honey
Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt
*/