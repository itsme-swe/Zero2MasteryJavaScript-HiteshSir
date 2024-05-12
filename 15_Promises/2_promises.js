// ◽Passing data as paramter in resolve and then consuming that data in then()

const promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Harsh", email: 'Harsh@gmail', age: 31})
    },1000)
})

promise2.then(function(user){
    console.log(user);
    
})


//◽Now creating Promise to handle errors 

const promise3 = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({carname: "Panamera", ownername: "Harsh", country: "India" })
    }, 2000)
})
// Here parameter as object passed in resolve() will be handled by then() and then() also takes callback function 
promise3.then(function(user){
    console.log(user);  
})