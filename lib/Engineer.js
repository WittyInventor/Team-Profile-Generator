const Employee = require("./Employee");
class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        // super means its referring to new employee from Employee.js
        this.github = github;
       
    } 
    
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}


module.exports = Engineer;
