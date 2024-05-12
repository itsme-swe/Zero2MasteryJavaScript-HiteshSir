/*
🔸Now in this example we'll be handling error 
*/
new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){        // This condition means if there is no error 
            resolve({devname: "Harsh", domain: "fulstack", country: "India"})
        } else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})
.then(function(user){
    console.log(user);  //🔸Output: { devname: 'Harsh', domain: 'fulstack', country: 'India' }
    return user.devname 
})
.then((username) => {
    console.log(username);  //🔸Output: Harsh
    
})
.catch(function(error){
    console.log(error); 
    //🔸Output: ERROR: Something went wrong --- if we received error in our promise then this will be our output.
})
.finally(function(){
   console.log("The promise has been rtesolved or rejected");
   
})