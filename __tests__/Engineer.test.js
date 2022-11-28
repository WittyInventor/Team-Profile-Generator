const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("getGithub", () => {
        it ("it should return the Engineer's Github information", ()=>
        {
            const engineerGithub = new Engineer (1, "Maria", "maria@gmail.com", "maria@github.com").getGithub()

            expect (engineerGithub).toEqual("maria@github.com");
        })
    })

    describe("getRole", () => {
        it ("it should return the Role of the Engineer", () => {
            const engineerRole = new Engineer (2, "Anna", "anna@gmail.com", "anna@github.com").getRole() // need the email to construct the employee class
            expect(engineerRole).toEqual("Engineer");
        })
    })
})
