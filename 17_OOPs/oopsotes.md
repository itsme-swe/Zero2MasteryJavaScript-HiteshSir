## Object
🔸Collection of properties and Methods

## Parts of OOP's
🔸 Object Literals

    const user = {
        username: "Harsh",
        loginCount: 5,
        signedIn: true,

        getUserDetails: function(){
            console.log('Got user details from database');
            console.log(`Username: ${this.username}`);   
            console.log(this);  // This  will show the current context 
        }
    }

    console.log(user["signedIn"]);

    console.log(user.username);

    console.log(user.getUserDetails());   

    /*
    Output: Current Context 
    {
      username: 'Harsh',
      loginCount: 5,
      signedIn: true,
      getUserDetails: [Function: getUserDetails]
    }
    */

🔸 Costructor function

        function User(username, loginCount, isLoggedIn){
            this.username = username;       // Here left handside is for variable and right handside is the parameter which we are passing 
            this.loginCount = loginCount;
            this.isLoggedIn = isLoggedIn;

        return this
    }

    const userThree = new User('Alex', 10, true)
    const userFour  = new User('Madona', 5, false)

🔸 Prototypes

🔸 Classes

🔸 Instances (Eg. new, this keyword)