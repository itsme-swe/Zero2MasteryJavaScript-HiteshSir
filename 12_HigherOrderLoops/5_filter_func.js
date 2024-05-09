/*

◽ Filter() method used to filter out elements based on certain conditions. The difference between filter() and forEach() function is filter() return new array to us and forEach() didnot return any value to us. .🔸filter( () => {} ) method also takes callBack fuction as parameter. And we need to store filter method in some new variable.

*/

const arr = [2, 10, 5, 8, 4, 30, 60, 50 ]

const value = arr.filter( (item) => item > 10 )         // Here the condition is value of item should be greater than 10

console.log(value);     // Output: [ 30, 60, 50 ]
