/*
◽ Chaining means using multiple methods.
*/

const numbers = [2, 4, 6, 8, 10]

const newNums = numbers
                .map( (val) => val * 10 )
                .map( (val) => val + 1  )
                .filter((val) => val > 30 )

console.log(newNums);       // Output: [ 41, 61, 81, 101 ]
