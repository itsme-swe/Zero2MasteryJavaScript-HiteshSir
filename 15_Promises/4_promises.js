/*
◽ Here we'll be handling promise this time with "async await" instead of ".then().catch()"
*/

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({lang: "JavaScript", domain: "backend", devOps: true})
        }else{
            reject("ERROR: Internal Error")
        }
    }, 2000)
})

async function consumePromise(){
    try {
        const response = await promise5
        console.log(response);

    } catch (error) {
        console.log(error);  

    }  
}

consumePromise()

/*
🔶 Note: Whenever we'll be using "async await" function to handle promise and if we received any error so we need to use "try()& catch()" block
*/