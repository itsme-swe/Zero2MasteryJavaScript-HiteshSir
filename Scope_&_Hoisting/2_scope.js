/*
    ◽ This is another example of scoping but this time with if else statement
*/

if (true) {
    const username = "Harsh"
    if (username === "Harsh"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);       // 🔸ERROR 1 : website not defined {error due to trying accessing website outside it's scope}
    
}

// console.log(username);             // 🔸ERROR 2 : username not defined error due to as usual ERROR 1.
