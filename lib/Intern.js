const Employee = require("./Employee");
class Intern extends Employee {
    constructor(Id, name, email, school) {
        super(Id, name, email);
        // super means its referring to new employee from Employee.js
        this.school = school;
       
    } 
    
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}


module.exports = Intern;
