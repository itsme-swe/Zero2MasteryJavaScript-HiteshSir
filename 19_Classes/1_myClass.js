// Here we are creating class by the name of User
class User {
    // This is constructor function created with the help of "constructor" in-built keyword in class
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    // In class we donot need to mention function keyword and in class function is called "Method"
    encryptPassword(){
        return `${this.password}abc`
    }

    // function to convert username into upperCase
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }


}

const user1 = new User('Harsh', 'harsh@123', '123dfg')

console.log(user1.encryptPassword());       // Calling encryptPassword() function
//- Output: 123dfgabc

console.log(user1.changeUsername());
//- Output: HARSH


/*
🔸Note: The difference between class and prototype method is we donot need to use function keyword and all the functions are created inside the class object only. And in class object we can use constructor keyword to create constructor function.
*/
