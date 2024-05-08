/*
    ◽ Here we are understanding about "this" keyword
*/

const user = {
    username: "Harsh",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username} ! Welcome to website`);
        console.log(this);
        
    }

}

user.welcomeMsg()
// Output: Harsh ! Welcome to website

user.username = "Sam"   // Here we changed the context from "Harsh" to "Sam"
user.welcomeMsg()
// Output: Sam ! Welcome to website

