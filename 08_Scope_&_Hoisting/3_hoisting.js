console.log(addOne(5));     // Output: 6

function addOne(num) {
    return num + 1
}


console.log(addTwo(6));     // 🔸ERROR: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2
}

/*

    ◽ In javaScript holding anything into variable like function, object etc is know as expression. 
        Here above function "addTwo" is an expression and we cannot call any expression before initilization that is why we received an error. 

*/

