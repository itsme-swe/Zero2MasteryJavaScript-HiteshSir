/*
◽For in Loop can be used on Objects
 */

const lang = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

// Using for in loop to iterate over keys
for (const key in lang){
    console.log(key);
}
/*
    Output:
    js
    cpp
    rb
    swift
*/

