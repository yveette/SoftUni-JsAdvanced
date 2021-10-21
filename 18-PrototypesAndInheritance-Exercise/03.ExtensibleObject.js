function extensibleObject() {
    return {
        extend: function (template) {
            let objProto = Object.getPrototypeOf(this);
            let templateEntries = Object.entries(template);

            for (const [key, value] of templateEntries) {
                if (typeof value == "function") {
                    objProto[key] = value;
                } else {
                    this[key] = value;
                }
            }
        }
    }
}

const myObj = extensibleObject();

/*
myObj: {
  __proto__: {}
  extend: function () {…}
}
*/


const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
/*
  myObj: {
  __proto__: {
    extensionMethod: function () {}
  },
  extend: function () {},
  extensionProperty: 'someString'
}
*/

console.log(myObj)