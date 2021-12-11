const Manager = require("../lib/Manager");

test("setting a github", () => {
    var manager1 = new Manager ("Mark", "123", "Mark@email.com", "555-555-5555")
    expect(manager1.officeNumber).toBe("555-555-5555")
})

test("getting officeNumber using getOfficeNumber()", () => {
    var manager1 = new Manager ("Mark", "123", "Mark@email.com", "555-555-5555")
    expect(manager1.getOfficeNumber()).toBe("555-555-5555")
})

test("testing getRole() method to be Manager", () => {
    var manager1 = new Manager ("Mark", "123", "Mark@email.com", "555-555-5555")
    expect(manager1.getRole()).toBe("Manager")
}) 