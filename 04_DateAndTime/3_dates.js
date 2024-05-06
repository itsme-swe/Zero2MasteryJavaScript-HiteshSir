/*********Passing Object in .toLocaleString() Method */
let newDate = new Date()
console.log(newDate);   // Output: 2024-05-06T12:05:54.318Z

const ownDate = newDate.toLocaleString('default', {
     weekday: "short"
     
})
console.log(ownDate);
// Output: Mon