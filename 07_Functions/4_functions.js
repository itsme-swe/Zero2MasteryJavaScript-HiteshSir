/*
◽ "Anonymous Functions" are functions wthout the name. They don't have their own identity. But if we create anonymous function the JS will throw an syntax error, so we create anonymous function only when we need function as value.

    function() {

    }
*/

//◽ "Name Function Expression" is simlar to function expression but in function expression we Anonymous Function as value but here we can name the function too.

const sum = function add(a,b){
    return a + b;
}

console.log(sum(10,5));     // Output: 15
// add()   // Output🔸 This will give error