/**************◽Behind the scene if we don't create "class" then how we create constructor function************/

function Car(carname, engine, color){
    this.carname = carname
    this.engine = engine
    this.color = color
}

Car.prototype.changeColor = function(color){
    this.color = color
    return `${this.color}`
}

// Now we'll create new User with the help of "new" keyword
const volkswagen = new Car('Slavia', '1499cc', 'black')
console.log(volkswagen);

//- Output: Car { carname: 'Slavia', engine: '1499cc', color: 'black' }

volkswagen.changeColor('lavared')   // Calling function changeColor()

console.log(volkswagen);        //- Output: Car { carname: 'Slavia', engine: '1499cc', color: 'lavared' }


