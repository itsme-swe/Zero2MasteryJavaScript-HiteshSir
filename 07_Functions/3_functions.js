//🔸"Function Statement" is a way to define function and also known as function declaration. It typically follows this below function:

function a(){
    console.log('I am function Statement');
}
a()

//🔸"Function Expression"  is another way to define a function. But here instead of usng function keyword followed by function name, we assign it to the variable

let sum = function(num1, num2){
    return num1 + num2
}

console.log(sum(5,5));  // Output: 10


/*

◽ So the diference between "function statement" and "function expression" is hoistng. We can call function statement before declareation but we canot call function expression before declaring.

*/