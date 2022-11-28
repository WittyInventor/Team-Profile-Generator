class Employee {
    
    constructor(id,name, email) {
        // add the validation part later in constructor for intern, engineer, and manager.
        this.name = name;
        this.email = email;
        this.id = id;
        // the ++this means incrementing the count by 1 from the variable of 0
    } 
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
    
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;




// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`