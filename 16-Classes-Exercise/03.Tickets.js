function tickets(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

    }

    let allTickets = [];
    for (let el of arr) {
        let [destination, price, status] = el.split('|');
        price = Number(price);

        let ticket = new Ticket(destination, price, status);
        allTickets.push(ticket);
    }
    // or :
    // allTickets.forEach((entry) => {
    //     const [destination, price, status] = entry.split('|');
    //     allTickets.push(new Ticket(destination, Number(price), status))
    // })


    if (criteria == 'destination') {
        allTickets.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        })
    } else if (criteria == 'price') {
        allTickets.sort((a, b) => {
            return a.price - b.price;
        })
    } else if (criteria == 'status') {
        allTickets.sort((a, b) => {
            return a.status.localeCompare(b.status);
        })
    }
    return allTickets;
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
))
/* Output:
[ Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' }, 
  Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' } ]
*/

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
))
/* Output:
[ Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' },
  Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' } ]
*/


console.log(tickets(['Atlantha|70.00|available',
    'Sofia|45.00|available'],
    'price'
))
/* Output:
[
  Ticket { destination: 'Sofia', price: 45, status: 'available' },
  Ticket { destination: 'Atlantha', price: 70, status: 'available' }
]
*/
