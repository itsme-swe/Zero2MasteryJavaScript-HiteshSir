const myHero = ['Hulk', 'Spiderman']

let hero = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
        
    }

}

// This is the method to inject any property inside the Object with the help of "Object.prototype" function
Object.prototype.harsh = function(){
    console.log(`Harsh is everywhere in all objects`);
    
}

Array.prototype.kill = function(){
    console.log(`Kill all the enemies`);
    
}

// hero.kill()     // Here hero object cannot use "kill() function" bcoz Object is parent class and the array is child class so child can inherit the properties but parent cannot inherit the properties of child.

hero.harsh()    // Object
myHero.kill()   // Array






