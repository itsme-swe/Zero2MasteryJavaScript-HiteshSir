console.log(Math.abs(-34));         // .abs() method makes the absolute means convert negative value to positive value
// Output: 34

console.log(Math.round(5.8));      // .round() method make the round off of the number
// Output: 6

console.log(Math.ceil(4.2));       // .ceil() method choose the top of the number
// Output: 5

console.log(Math.floor(4.6));      // .floor() method choose the down value of the number
// Output: 4


console.log(Math.min(5, 1, 4, 6));  // .min() find's the minimum value
// Output: 1

console.log(Math.max(2, 5, 4, 7, 10));      // .max() find's the maximum value 
// Output: 10


console.log(Math.floor((Math.random()*10 + 1))); 

// ************** Exercise: Get the value between 10 - 20 but at least the minimum value should be 10 ********************
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));


console.log(Math.pow(2,3));         // Returns the base to the exponent power.
// Output: 8 (2 raised to the power of 3)  

console.log(Math.PI);       // A mathematical constant representing the ratio of the circumference of a circle to its diameter.
// Output: 3.141592653589793




/*
    ➡️ Most commonly methods used with Math Object

    🔸Math.abs()
    
    🔸Math.round()
    
    🔸Math.ceil()
    
    🔸Math.floor()
    
    🔸Math.min()
    
    🔸Math.max()
    
    🔸Math.pow()
    
    🔸Math.random()
    
    🔸Math.PI

*/
