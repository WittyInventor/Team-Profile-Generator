const Employee = require("./Employee");
class Manager extends Employee {
    constructor(Id, name, email, officeNumber) {
        super(Id, name, email);
        // super means its referring to new employee from Employee.js
        this.officeNumber = officeNumber;
       
    } 
     
    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
