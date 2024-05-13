//◽ Constructor Function 

function User(username, loginCount, isLoggedIn){
    this.username = username;       // Here left handside is for variable and right handside is the parameter which we are passing 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = User('Harsh', 5, true)
const userTwo = User('Vandana', 10, false)

console.log(userOne);
console.log(userTwo);       // Here the output will be usertwo will replace the values of userOne so this will create mess for the coders. To rectifythis error of overlapping the values we will use "new" keyword.

const userThree = new User('Alex', 10, true)
const userFour = new User('Madona', 5, false)

console.log(userThree); // Output: User { username: 'Alex', loginCount: 10, isLoggedIn: true }
console.log(userFour);  // Output: User { username: 'Madona', loginCount: 5, isLoggedIn: false }

/*
🔸Firstly the empty object is created.
🔸Then with the help of "return" keyword we are inserting all the things inside the constructor function
🔸With the help of "new" keyword the constructor function is called.
*/



