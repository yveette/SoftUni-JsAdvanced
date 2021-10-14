class Circle {
    constructor(radius) {
        this.radius = radius;
        // this._radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }

    /*
    // bonus :
    get radius(){
        return this._radius;
    }

    set radius(value){
        if( typeof value != 'number'){
            throw new TypeError('Radius must be a number');
        }
        this._radius = value;
    }
    */
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`); // Radius: 2
console.log(`Diameter: ${c.diameter}`); // Diameter: 4
console.log(`Area: ${c.area}`); // Area: 12.566370614359172
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`); // Radius: 0.8
console.log(`Diameter: ${c.diameter}`); // Diameter: 1.6
console.log(`Area: ${c.area}`); // Area: 2.0106192982974678

/*
// bonus :
c.radius = 10
console.log(`Radius: ${c.radius}`); // Radius: 10
console.log(`Diameter: ${c.diameter}`); // Diameter: 20
*/