/*
◽Map object hold key-value pairs. Map donot store duplicate values insde it.
*/

const map = new Map()     // Creating Map Object

map.set('IN',"India")     // .set(key,val) insert the key-value in Map
map.set('USA', "United States of America")
map.set('EU', "Europe")
map.set('AE', "Dubai")

console.log(map);
/*
    Output: Map return an object
          Map(4) {
        'IN' => 'India',
        'USA' => 'United States of America',
        'EU' => 'Europe',
        'AE' => 'Dubai'
}
*/

// Now iterating over Map using for of loop to print both key and value 
for (const [key, value] of map) {
  console.log(key, ':-', value);
   
}

/*
    Output:
        IN :- India
        USA :- United States of America
        EU :- Europe
        AE :- Dubai
*/

