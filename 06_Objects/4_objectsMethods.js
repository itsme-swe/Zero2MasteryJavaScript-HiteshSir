const tinderUser = {
    name: "Alex",
    age: 24,
    isLoggedIn: true,
    location: "USA",

}

/**********◽ Now accessing keys of Objects ***************/

console.log(Object.keys(tinderUser));
// Output: [ 'name', 'age', 'isLoggedIn', 'location' ]  But it return the result in array


/**********◽ Now accessing Values of Objects ***************/

console.log(Object.values(tinderUser));
// Output: [ 'Alex', 24, true, 'USA' ]

/**********◽ Now accessing Key: Values pair of Objects ***************/

console.log(Object.entries(tinderUser));
/* Output:

    [
  [ 'name', 'Alex' ],
  [ 'age', 24 ],
  [ 'isLoggedIn', true ],
  [ 'location', 'USA' ]
]

*/

