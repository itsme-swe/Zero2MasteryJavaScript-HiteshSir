let myDate = new Date()             // Creating object of Date

console.log(myDate);    // Output: 2024-05-06T11:25:07.608Z

console.log(myDate.toString());     // Here we are converting milliseconds time into string
// Output: Mon May 06 2024 16:56:36 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
// Output: Mon May 06 2024

console.log(myDate.toISOString());
// Output: 2024-05-06T11:30:00.956Z

console.log(myDate.toJSON());
//Output: 2024-05-06T11:31:37.562Z

console.log(myDate.toLocaleDateString());
// Output: 5/6/2024

console.log(myDate.toLocaleString());
// Output: 5/6/2024, 5:03:01 PM

console.log(myDate.toLocaleTimeString());
// Output: 5:03:58 PM 

/*
    ➡️ Most commonly methods used with Date Object

    🔸.toString()               Mon May 06 2024 16:56:36 GMT+0530 (India Standard Time)
    🔸.toDateString()           Mon May 06 2024
    🔸.toISOString()            2024-05-06T11:30:00.956Z
    🔸.toJSON()                 2024-05-06T11:31:37.562Z
    🔸.toLocaleDateString()     5/6/2024
    🔸.toLocaleString()         5/6/2024, 5:03:01 PM
    🔸.toLocaleTimeString()     5:03:58 PM

*/
