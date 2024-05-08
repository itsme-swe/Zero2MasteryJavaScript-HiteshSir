/*
    ◽Here we are using " rest oprator " to pass number of arguments. We use rest(...) operator generally at place where we do not know the size of arguments customer will pass
 */

function calculateCartPrice(...num1) {
    return num1
}

const output = calculateCartPrice(10,20,30,40,50)
console.log(output);
// Output: [ 10, 20, 30, 40, 50 ]   " rest operator return values in array form " 


/*******◽ Handling Objects in function **************/

const user = {
    name: "Harsh",
    car: "Porsche",
    price: "2.2 cr"
}

function handleObject(obj) {
    return `The car ${obj.car} is owned by ${obj.name} and it cost around ${obj.price}`;
}

const objOutput = handleObject(user)    // When we creating function for object so when we call that function we need to pass " object_Name " as argument.
console.log(objOutput);


/********◽ Handling Array in function **********/

/* Here we are creating array and we need to create a function to return it's second value */

const myArray = [2, 4, 6, 8, 10]

function handleArray(arr) {
    return arr[2]
}

const arrarOutput = handleArray(myArray)
console.log(arrarOutput);
// Output: 6
