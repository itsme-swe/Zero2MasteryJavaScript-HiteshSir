const bankBalance = new Number(99999)


console.log(typeof (bankBalance.toString()));     // .toString() method is used to convert number to String


console.log(bankBalance.toFixed(2));              // .toFixed() used to format a number with a specified number of digits after the decimal point 
// Output: 99999.00


const othernumber = 123.8966

console.log(othernumber.toPrecision(5));          // .toPrecision() is used to control how many digits are used to represent it.
// Output: 123.90


const priceCar = 1250000

console.log(priceCar.toLocaleString());      // .toLocaleString() is used to convert number into your local language format but by default they are set accordig to US standards
// Output: 1,250,000

console.log(priceCar.toLocaleString('en-IN'));
// Output: 12,50,000

const int = "10"
console.log(typeof(int));   // string type

const newIntVal = parseInt(int)               // Convert string into number and same we have for float type too 'parseFloat'  
console.log(typeof(newIntVal));     // number type

/*
    ➡️ Most commonly methods used with number data type
    
    🔸.toString()
    
    🔸.toFixed()
    
    🔸.toPrecision()
    
    🔸.toLocaleString()
    
    🔸parseInt()
    
    🔸parseFloat()

*/



