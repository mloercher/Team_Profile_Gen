const Intern = require("../lib/Intern");

test("setting a school", () => {
    var intern1 = new Intern ("Mark", "123", "Mark@email.com", "Columbia")
    expect(intern1.school).toBe("Columbia")
})

test("getting school using getSchool()", () => {
    var intern1 = new Intern ("Mark", "123", "Mark@email.com", "Columbia")
    expect(intern1.getSchool()).toBe("Columbia")
})

test("testing getRole() method to be engineer", () => {
    var intern1 = new Intern ("Mark", "123", "Mark@email.com", "Columbia")
    expect(intern1.getRole()).toBe("Intern")
}) 