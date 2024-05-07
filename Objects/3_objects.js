/***********◽ Defining Object using Singleton Method ************/

const appUser = new Object()

appUser.name = "Harsh"
appUser.lname = "Mehra"
appUser.id = "123abc"
appUser.age = 31
appUser.location = "Jaipur"

console.log(appUser);
/*  Output:

    {
  name: 'Harsh',
  lname: 'Mehra',
  id: '123abc',
  age: 31,
  location: 'Jaipur'
}

*/

/***********◽ Joining two Objects **************/

const obj1 = {1: "a", 2: "b", 3: "c"}

const obj2 = {4: "d", 5: "e", 6: "f"}

const newObj = {...obj1, ...obj2}       // Here we are using 🔸"spread operator" 

console.log(newObj);
// Output: { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

