// IIFE function 
// Immediately Invoked Function Expression
// A JavaScript function that runs as soon as it is defined. 

(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i])
        }
        return result;
    }

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    }

    Array.prototype.sum = function () {
        return this.reduce((a, b) => {
            return a + b;
        }, 0)
        // or :
        // let sum = 0;
        // for (let i = 0; i < this.length; i++) {
        //     sum += this[i];
        // }
        // return sum;
    }

    Array.prototype.average = function () {
        // return this.sum() / this.length;
        return this.reduce((a, b) => {
            return a + b / this.length;
        }, 0)
    }
})()