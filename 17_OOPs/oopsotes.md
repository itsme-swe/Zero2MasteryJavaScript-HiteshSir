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

🔸 Prototypes

🔸 Classes

🔸 Instances (Eg. new, this keyword)