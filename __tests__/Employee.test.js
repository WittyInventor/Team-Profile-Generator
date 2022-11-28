const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("getName", () => {
        it ("it should return the name of the Employee", () => {
            const employeeName = new Employee (1,"Anna", "anna@gmail.com").getName() 
// need the email to construct the employee class
            expect(employeeName).toEqual("Anna");
        })
    })

    describe("getId", () => {
        it ("it should return the Id of the Employee", () => {
            const employeeId = new Employee (2,"Anna", "anna@gmail.com").getId() 
// need the email to construct the employee class
            expect(employeeId).toEqual(2);
        })
    })
    
    describe("getEmail", () => {
        it ("it should return the Email of the Employee", () => {
            const employeeEmail = new Employee (3, "Anna", "anna@gmail.com").getEmail() 
// need the email to construct the employee class
            expect(employeeEmail).toEqual("anna@gmail.com");
        })
    })

    describe("getRole", () => {
        it ("it should return the Role of the Employee", () => {
            const employeeRole = new Employee (4, "Anna", "anna@gmail.com").getRole() // need the email to construct the employee class
            expect(employeeRole).toEqual("Employee");
        })
    })
})
