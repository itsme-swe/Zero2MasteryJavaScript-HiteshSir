//◽ Parent Class
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

//◽Child Class
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(courseName){
        this.courseName = courseName
        console.log(`A new course ${this.courseName} was added by ${this.username}.`);
        
    }
}

const faculty = new Teacher("Alia", "alia@gmail.com", "123Alaya")
console.log(faculty);

faculty.addCourse('React')      // Output: A new course React was added by Alia.

console.log(faculty);

/*
Teacher {
  username: 'Alia',
  email: 'alia@gmail.com',
  password: '123Alaya',
  courseName: 'React'
}
*/



