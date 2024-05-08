/* Creating arrow function */


//◽ Basic Arrow Function

const sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(5,5));

console.log();

//◽ Implicite return Arrow function means we donot need to write return keyword. But when we use curly brackets '{}' to define arrow function we need to write return keyword.

const addOne = (val1, val2) => val1 + val2

console.log(addOne(2,2));

