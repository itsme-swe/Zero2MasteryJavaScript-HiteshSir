/*
◽ reduce() function also takes callBack function as parameter. reduce( (accumulator, currentValue) => accumulator + currentValue , initial Value) 
*/

const array = [1, 2, 3, 4, 5]

const initialValue = 0;

const sumWithInitial = array.reduce( (accumulator, currentVal) => accumulator + currentVal, initialValue )      // Here accumulator initial value is 0 and currentValue is first value of array

console.log(sumWithInitial);        // Output: 15
