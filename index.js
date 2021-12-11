const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//collecting Manager information with prompts
const promptManager = () => {
    return inquirer.prompt ([
    {
        type: "input",
        name: "managerName",
        message: "What is your Manager's Name? (Required)",
        validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a name for your manager!");
          return false;
        }
      }
    },
    {
        type: "input",
        name: "managerID",
        message: "What is your Manager's ID number? (Required)",
        validate: (managerIdInput) => {
        if (managerIdInput) {
          return true;
        } else {
          console.log("You must enter a valid ID number for your manager!");
          return false;
        }
      }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your Manager's email address? (Required)",
        validate: (managerEmailInput) => {
        if (managerEmailInput) {
          return true;
        } else {
          console.log("You must enter an Email address for your manager!");
          return false;
        }
      }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your Manager's Office number? (Required)",
        validate: (managerOfficeNumberInput) => {
        if (managerOfficeNumberInput) {
          return true;
        } else {
          console.log("You must enter an Office number for your manager!");
          return false;
        }
      }
    },
    ]);
};

//collecting Employee information with prompts
const promptEmployee = () => {
    return inquirer.prompt ([
    {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to add an employee to the team? (Required)",
        default: true
        
    },
    {
        type: "input",
        name: "employeeName",
        message: "What is the Employee's Name? (Required)",
        validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a name for your employee!");
          return false;
        }
      }
    },
    {
        type: "input",
        name: "employeeID",
        message: "What is your employee's ID number? (Required)",
        validate: (employeeIdInput) => {
        if (employeeIdInput) {
          return true;
        } else {
          console.log("You must enter a valid ID number for your employee!");
          return false;
        }
      }
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "What is your employee's email address? (Required)",
        validate: (employeeEmailInput) => {
        if (employeeEmailInput) {
          return true;
        } else {
          console.log("You must enter an Email address for your employee!");
          return false;
        }
      }
    },
    {
        type: "checkbox",
        name: "employeeRole",
        message: "What is your Employee's role? (Required)",
        choices: ["Engineer","Intern"]
    },
    ]);
};

promptManager();
promptEmployee();