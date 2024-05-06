const bankBalance = new Number(99999)


console.log(typeof (bankBalance.toString()));       // .toString() method is used to convert number to String


console.log(bankBalance.toFixed(2));                // .toFixed() used to format a number with a specified number of digits after the decimal point 
// Output: 99999.00


const othernumber = 123.8966

console.log(othernumber.toPrecision(5));            // .toPrecision() is used to control how many digits are used to represent it.
// Output: 123.90

