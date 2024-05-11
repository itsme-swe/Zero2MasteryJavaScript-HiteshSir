const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'batman', 'flash']

const team = marvel_heros.concat(dc_heros)      // Merge two arrays together and return new array
console.log(team);
// Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const allNewHeros = [...marvel_heros, ...dc_heros]      // Spread operator is also use to concat two arrays and generally we spread operator (...)
console.log(allNewHeros);
// Output: [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [4, 6, 9]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);
/* Output:
[
  1, 2, 3, 4, 5,
  6, 7, 4, 6, 9
]

*/

console.log(Array.from("Harsh"));       // Output: [ 'H', 'a', 'r', 's', 'h' ]

const score1 = 200
const score2 = 300
const score3 = 400

console.log(Array.of(score1, score2, score3));      // .of() convert any variable into Array
// Output: [ 200, 300, 400 ]

/**************************************************/

/*  ➡️ Most commonly methods used with array 

    🔸.push(val)                        --- used to add values
    
    🔸.pop()                            --- used to remove values from last        
    
    🔸.unshift(val)                     --- used to add value in starting
    
    🔸.shift()                          --- used to remove the value from starting
    
    🔸.icludes(val)                     --- used to check whether the value is present or not 
    
    🔸.join()                           --- convert array to string
    
    🔸.slice(start_index, end_index)    --- Return new array but donot change our original array
    
    🔸.splice(start_index, end_index)   --- Return new array but change our original array
    
    🔸.concat()         -- Join two array    
    
    🔸Spread Operator(...) Join two array
    
    🔸Array.from("Harsh")    // Output: [ 'H', 'a', 'r', 's', 'h' ]
    
    🔸Array.of()

    ◽Note :- Difference b/w 'Array.from()' and 'Array.of()' Method:
              
              1. 'Array.of()' is useful when we want to create an array with specific elements.
              
              2. 'Array.from()' allow us to create new array from array-like or iterable object, such as NodeList, string or Set and Map.
    
*/