/*
◽map() function is used to iterate over an array and transform each element of the array accordig to the given condition 
*/

const nums = [10, 20, 30, 40]

const newNums = nums.map( (item) => item + 5 )      // Here the condition is to add 5 in every item value in the nums array

console.log(newNums);   // Output: [ 15, 25, 35, 45 ]
