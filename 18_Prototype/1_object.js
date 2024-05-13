function sum(num){
    return num + 10
}

sum.power = 2
console.log(sum(5));        // Output: 15

console.log(sum.power);     // Output: 1

console.log(sum.prototype); // Output: {}

/****************************************************/

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.print = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser('chai', 50)
const tea = new createUser('tea', 100)

chai.increment()

