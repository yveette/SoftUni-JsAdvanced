class Bank {
    _bankName
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let found = this.allCustomers.find(p => p.firstName == customer.firstName && p.lastName == customer.lastName && p.personalId == customer.personalId);
        if (found) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
        }

        let firstName = customer.firstName;
        let lastName = customer.lastName;
        let personalId = customer.personalId;

        let customerAdd = {
            firstName,
            lastName,
            personalId,
            totalMoney: 0,
            transactions: []
        }
        this.allCustomers.push(customerAdd);
        return customer;
    }

    depositMoney(personalId, amount) {
        let found = this.allCustomers.find(p => p.personalId == personalId);
        if (found == undefined) {
            throw new Error('We have no customer with this ID!');
        }
        found.totalMoney += amount;
        found.transactions.push(`${found.firstName} ${found.lastName} made deposit of ${amount}$!`);
        return `${found.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let found = this.allCustomers.find(p => p.personalId == personalId);
        if (found == undefined) {
            throw new Error('We have no customer with this ID!');
        }
        if (amount > found.totalMoney) {
            throw new Error(`${found.firstName} ${found.lastName} does not have enough money to withdraw that amount!`);
        }
        found.totalMoney -= amount;
        found.transactions.push(`${found.firstName} ${found.lastName} withdrew ${amount}$!`)
        return `${found.totalMoney}$`;
    }

    customerInfo(personalId) {
        let found = this.allCustomers.find(p => p.personalId == personalId);
        if (found == undefined) {
            throw new Error('We have no customer with this ID!');
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${found.firstName} ${found.lastName}`);
        result.push(`Customer ID: ${found.personalId}`);
        result.push(`Total Money: ${found.totalMoney}$`);
        result.push('Transactions:');
        if (found.transactions.length > 0) {
            let i = found.transactions.length
            // return i
            for (let i = found.transactions.length; i > 0; i--) {
                result.push(`${i}. ${found.transactions[i - 1]}`);
            }
        }

        return result.join('\n');
    }
}

// Input:
let bank = new Bank('SoftUni Bank');
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));
/* Output:
{ firstName: ‘Svetlin’, lastName: ‘Nakov’, personalId: 6233267 }
{ firstName: ‘Mihaela’, lastName: ‘Mileva’, personalId: 4151596 }
500$
375$
Bank name: SoftUni Bank
Customer name: Svetlin Nakov
Customer ID: 6233267
Total Money: 375$
Transactions:
3. Svetlin Nakov withdrew 125$!
2. Svetlin Nakov made depostit of 250$!
1. Svetlin Nakov made depostit of 250$!
*/




