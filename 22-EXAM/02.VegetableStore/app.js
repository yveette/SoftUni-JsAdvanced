class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this.totalPrice = 0;
    }

    loadingVegetables(vegetables) {
        // "{type} {quantity} {price}"
        // The quantity and price are per unit kilogram.  
        let added = [];
        for (let el of vegetables) {
            const all = el.split(' ');
            const type = all[0];
            const quantity = Number(all[1]);
            const price = Number(all[2]);

            const found = this.availableProducts.find(x => x.type == type)
            if (found) {
                found.quantity += quantity;
                if (found.price < price) {
                    found.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price })
                added.push(`${type}`)
            }

        }
        return `Successfully added ` + added.join(', ');
    }

    buyingVegetables(selectedProducts) {
        let currentBill = 0
        for (let el of selectedProducts) {
            const all = el.split(' ');
            const type = all[0];
            const quantity = all[1];

            const found = this.availableProducts.find(x => x.type == type)
            if (!found) {
                throw new Error(`${type} is not available in the store, your current bill is $${currentBill.toFixed(2)}.`);
            }

            if (found.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${currentBill.toFixed(2)}.`);
            }
            found.quantity -= quantity;
            const cost = found.price * quantity;
            this.totalPrice += cost;

            currentBill += cost;

        }
        return `Great choice! You must pay the following amount $${currentBill.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        const found = this.availableProducts.find(x => x.type == type)
        if (!found) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (found.quantity < quantity) {
            found.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        found.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        let result = [];
        result.push(`Available vegetables:`);
        this.availableProducts = this.availableProducts.sort((a, b) => a.price - b.price);
        this.availableProducts.forEach(x => {
            result.push(`${x.type}-${x.quantity}-$${x.price}`);
        })

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

