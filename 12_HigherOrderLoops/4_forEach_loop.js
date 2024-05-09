/*
◽forEach loop
*/

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// forEach loop takes a call back function
coding.forEach((val) => {
    console.log(val);  
})

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe)         // Both the methods are doing same things but here we can pass function too inside forEach loop

coding.forEach((item, index) => {
    console.log(item, index);
    
})

// Iterating over Objects using forEach loop
const carName = [
    {
        car: "Vera",
        color: "Red"
    },
    {
        car: "BMW",
        color: "Black"
    },
    {
        car: "Audi",
        color: "White"
    }
]

carName.forEach( (item) => {
    console.log(item.car);   
} )