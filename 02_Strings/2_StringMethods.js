const carName = new String("Maruti Suzuki")
console.log(carName.length);                 // .length is used to find the length of string


console.log(carName.toUpperCase());          // .toUpperCase() used to covert all the letters to upper case


console.log(carName.charAt(4));             // .charAt(index_val) used to find the character present at the index value


const newStr = carName.substring(0, 5)      // .substring(start_index, end_index) used to extract the particular part from string but to store that substring part we need to create extra variable 
console.log(newStr);        // Output: Marut


const anotherStr = carName.slice(-7)
console.log(anotherStr);    // Output: Suzuki

/*  Note: The only difference between '.substring()' abd .slice() method is .substring method don't accept negative indexing and '.slice()' accept the negative indexing */

const newString = "    Harsh    "
console.log(newString);
console.log(newString.trim());              // .trim() is used to remove the extra spaces from the string


const url = "https://harsh.com/harsh%20mehra"
console.log(url.replace('%20', '-'));       // .replace('valToBeReplaced', 'ValToBePlaced') method is used to replace the value passed as parameter.
// Output: https://harsh.com/harsh-mehra


console.log(url.includes('harsh'));         // .includes('value') method return boolean value to us, wheter the value is present or not in string








