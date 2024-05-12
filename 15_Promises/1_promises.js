/*
    ◽ Method 1 to create Promise with the help of "new" keyword new Promise()
*/

// Phase-I Creation of Promise and holding that promise in variable
const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Aysnc task completed');
        resolve()
        
    }, 1000)
})
// Phase-II Consuming Promise with the help of then() function
promiseOne.then(function(){
    console.log('Promise Consumed');
    
})

// Creating promise without holding it into variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed');
        resolve()
    }, 3000)
}).then(function(){
    console.log('Async 2 resolved');
    
})