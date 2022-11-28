const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("getSchool", () => {
        it ("it should return the School's information", ()=>
        {
            const internSchool = new Intern (1, "Maria", "maria@gmail.com", "Boise State University").getSchool()

            expect (internSchool).toEqual("Boise State University");
        })
    })

    describe("getRole", () => {
        it ("it should return the Role of the Intern", () => {
            const internRole = new Intern (2, "Anna", "anna@gmail.com", "Boise State University").getRole() // need the email to construct the employee class
            expect(internRole).toEqual("Intern");
        })
    })
})
