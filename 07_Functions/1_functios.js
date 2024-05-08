// Creating function

function addTwonumber(num1, num2){      // Passing values while defining function is know as parameters
    console.log((num1 + num2));
     
    
}

const result = addTwonumber(5, 5)        // Passing values while calling functions is know as arguments
// Output: 10

console.log(result);
// Output: undefined


/***************************************************************/

function sumOfNum(num1, num2) {
    return num1 + num2
}

const finalResult = sumOfNum(50, 10)
console.log(finalResult);
// Output: 60


/***************************************************************/

// What if user didn't pass any argument to the function, so to deal with such situation we'll be using if else statement inside function

function addThreeNum(num1, num2, num3){
    // Here if user did not pass any argument then it will return undefined and then only we'll enter in this if condition 
    if (!arguments.length){          // " arguments.length === 0 " we can also pass condition in this form too
        console.log("Please enter the valid numbers");
        return;
    }
    return num1 + num2 + num3
}

const total = addThreeNum()
console.log(total);
// Output: 35

/*

    🔶 Note: "arguments.length": This property returns the number of arguments passed to the function.

 */