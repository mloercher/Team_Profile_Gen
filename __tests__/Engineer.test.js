const Engineer = require("../lib/Engineer");

test("setting a github", () => {
    var engineer1 = new Engineer ("Mark", "123", "Mark@email.com", "MarkGit")
    expect(engineer1.github).toBe("MarkGit")
})

test("getting github using getGithub()", () => {
    var engineer1 = new Engineer ("Mark", "123", "Mark@email.com", "MarkGit")
    expect(engineer1.getGithub()).toBe("MarkGit")
})

test("testing getRole() method to be engineer", () => {
    var engineer1 = new Engineer ("Mark", "123", "Mark@email.com", "MarkGit")
    expect(engineer1.getRole()).toBe("Engineer")
}) 