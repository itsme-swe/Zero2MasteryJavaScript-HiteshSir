/*  
    ◽ Here we are learning about " scope " level.
*/

function one() {
    const gurunam = "Hitesh Sir"

    function two() {
        const subject = "JavaScript"
        console.log(gurunam);
        
    }
    // console.log(subject);   //🔸 ERROR 1. subject not defined ... { We received this error bcoz we are trying to access subject outside of it's scope }
    two();
    
}

one()
// Output: Hitesh Sir