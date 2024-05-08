/*
◽ Immeditaely Invoked Function Expression (IIFI) help function to get polluted from global scope
*/

// Named IIFI
(function greet() {
    console.log(`Hello Welcome to website`);
    
})();


// IIFI using Arrow function

((num1, num2) => {
    console.log(num1 + num2);
     
})(5,5)

