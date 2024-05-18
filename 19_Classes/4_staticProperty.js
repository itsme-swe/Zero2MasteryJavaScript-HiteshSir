class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }

    static createID(){
        return `${Math.round(Math.random() * 10 + 1)}`
    }
}

const harsh = new User('Harshm')

console.log(harsh.createID());
