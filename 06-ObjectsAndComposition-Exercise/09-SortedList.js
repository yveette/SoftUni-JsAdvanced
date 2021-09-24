function createSortedList(params) {
    const list = [];
    return {
        add(element) {
            // adds a new element to the collection
            list.push(element);
            list.sort((a, b) => a - b);
            // this.size++;
        },
        remove(index) {
            // removes the element at position index
            if (index < 0 || index >= list.length) {
                // error - do nothing
            } else {
                list.splice(index, 1);
                // this.size--;
            }
        },
        get(index) {
            // returns the value of the element at position index
            if (index < 0 || index >= list.length) {
                // error - do nothing
            } else {
                return list[index];
            }
        },
        get size() {
            return list.length;
        }
    }
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
/* Output:
6
7
*/