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

