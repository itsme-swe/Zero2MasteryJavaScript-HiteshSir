// fetch('https://api.github.com/users/hiteshchoudhary?utm_source=pocket_saves')
// .then(function(response){
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
    
// })
// .catch((error) => {
//     console.log(error);
    
// })

async function logApi() {
   try {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary?utm_source=pocket_saves')
    
    // Check if the response status is OK (status code 200-299)
    if (!response.ok){
        // If response status is not OK, throw an Error with the HTTP status
        throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const apiData = await response.json()
    console.log(apiData);
   } catch (error) {
    console.log(`ERROR : ${error}`);
    
   }
    
}
logApi()