/************◽ Now defining functions inside Objects **********/

const carUser = {
    name: "Harsh",
    lname: "Mehra",
    age: 31,
    carName: "Virtus GT",
    carCompanyName: "Volkswagen",
    
    greetings: function(){
        console.log("Hello Volkswagen !!!");
        
    },

    welcomeMsg: function(){
        console.log(`Hello! Mr. ${this.name} ${this.lname} `);
        
    }
}

console.log(carUser.greetings());       // Output: Hello Volkswagen !!!

console.log(carUser.welcomeMsg());      // Output: Hello! Mr. Harsh Mehra

