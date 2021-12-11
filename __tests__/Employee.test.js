const Employee = require("../lib/Employee");

//testing properties 
test ("instantiate Employee object", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(typeof(employee1)).toBe("object")
})

test ("setting a name", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(employee1.name).toBe("Mark")
})

test ("setting an id", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(employee1.id).toBe("123")
})

test ("setting an email", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(employee1.email).toBe("Mark@email.com")
})

//testing methods 
test ("getting a name", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(employee1.getName()).toBe("Mark")
})

test ("getting an id", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(employee1.getId()).toBe("123")
})

test ("getting an email", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(employee1.getEmail()).toBe("Mark@email.com")
})

test ("getting a role", () => {
    var employee1 = new Employee ("Mark", "123", "Mark@email.com")
    expect(employee1.getRole()).toBe("Employee")
})

