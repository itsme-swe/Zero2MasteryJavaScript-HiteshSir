const myArray = new Array()     // Empty array

myArray.push(5)     // .push() method used to add values inside array
myArray.push(10)
myArray.push(30)
myArray.push(50)


console.log(myArray);       // Output: [ 5, 10, 30, 50 ]

myArray.pop()       // .pop() method simply removes the value from last in the array

console.log(myArray);     // Output: [ 5, 10, 30 ]  


myArray.unshift(15)     // .unshift() method add value at starting point in array      

console.log(myArray);       // Output: [ 15, 5, 10, 30 ]   

myArray.shift()         // Removes value from the front
console.log(myArray);       // Output: [ 5, 10, 30 ]

console.log(myArray.includes(45));      // .includes() return boolean value
// Output: false      

/*****************Declaring new Array***/ 
const  newArr = [2, 5, 8, 10 , 12, 15]

const mynewArr = newArr.join()      // .join() method convert array into string

console.log(newArr);        // [ 2, 5, 8, 10, 12, 15 ]
console.log(mynewArr);      // 2,5,8,10,12,15

/****************slice() & splice()*********/
console.log("Original Array: ", newArr);
// Output: Original Array:  [ 2, 5, 8, 10, 12, 15 ]

const myn1 = newArr.slice(1, 5)     // .slice(start_index, end_index) donot change our original array

console.log("Array after slice: ", myn1);
// Output: Array after slice:  [ 5, 8, 10, 12 ]

console.log("Original Array: ", newArr);
// Output: Original Array:  [ 2, 5, 8, 10, 12, 15 ]

const myn2 = newArr.splice(1, 4)    // .splice(start_index, end_index)  manipulatye our original array
console.log("Array after Splice: ",myn2);
// Output: Array after Splice:  [ 5, 8, 10, 12 ]

console.log("Original Array: ", myn2);
// Output: Original Array:  [ 5, 8, 10, 12 ]







