/********◽ Destructuring Object **********/

const carSpecs = {
    carname: "Aston Martin",
    carseries: "DB12",
    cartype: "sedan",
    carengine: "V8"
}

const {carname, cartype} = carSpecs     
const {carengine: machine} = carSpecs       // Even while destructuring we name the properties according to us to the properties.

console.log(carname);

console.log(cartype);

console.log(machine);

/* 🔸 Note :- Using curly braces'{}' in defining variables means we are doing destructuring  */

