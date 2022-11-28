const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it ("it should return the office number information", ()=>
        {
            const managerOfficeNumber = new Manager (1, "Maria", "maria@gmail.com", "010-939-7300").getOfficeNumber()

            expect (managerOfficeNumber).toEqual("010-939-7300");
        })
    })

    describe("getRole", () => {
        it ("it should return the Role of the Manager", () => {
            const managerRole = new Manager (2, "Anna", "anna@gmail.com", "010-939-7300").getRole() // need the email to construct the employee class
            expect(managerRole).toEqual("Manager");
        })
    })
})