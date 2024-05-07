/***********◽ Declaring Objects using Object Literals *********/

const mySymbol = Symbol("Key1")         // Declaring Symbol Datatype

const JsUser = {
    name: "Hitesh",
    lname: "Mehra",
    [mySymbol]: "myKey1",               // Accessing outer symbol inside object with the help of '[ ]' brackets
    age: 31,
    location: "jaipur",
    isLoggedIn: "false",
    lastLoggedIn: ["Monday", "Wednesday"]
}

/************◽ Accessing Object properties with the help of two methods ***********/

console.log(JsUser.lname);              // Method 1 with the help of '.propertyName'
// Output: Mehra

console.log(JsUser["isLoggedIn"]);      // Method 2 with the help of 'square brackets [ ]', but in square brackets we need to push value in "string" type
// Output: false

console.log(typeof JsUser[mySymbol]);
// Output: string


/*************◽ Manipulating properties: values of Object *******/

JsUser.age = 32
console.log(JsUser.age);                // Now the age is 32


/************◽ We can freeze our properties that no one can manipulate Objects ********/

Object.freeze(JsUser)       // After freezing our properties have not changed

JsUser.location = "Delhi"

console.log(JsUser);

/* Output:
    {
  name: 'Hitesh',
  lname: 'Mehra',
  age: 32,
  location: 'jaipur',
  isLoggedIn: 'false',
  lastLoggedIn: [ 'Monday', 'Wednesday' ],
  [Symbol(Key1)]: 'myKey1'
}

*/

