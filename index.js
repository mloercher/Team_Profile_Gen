const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { renderManager, renderIntern, renderEngineer } = require("./src/page-template.js");
const teamMembers = [];
const fs = require("fs");

//collecting Manager information with prompts
const promptManager = () => {
  return inquirer.prompt([
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
      },
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
      },
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
      },
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
      },
    },
  ]);
};

// const promptIntern = () => {
//   return inquirer.prompt([
//     {
//       type: "input",
//       name: "internName",
//       message: "What is your Intern's Name? (Required)",
//       validate: (nameInput) => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log("You must enter a name for your Intern!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "internID",
//       message: "What is your Interns's ID number? (Required)",
//       validate: (internIdInput) => {
//         if (internIdInput) {
//           return true;
//         } else {
//           console.log("You must enter a valid ID number for your Intern!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "internEmail",
//       message: "What is your Intern's email address? (Required)",
//       validate: (internEmailInput) => {
//         if (internEmailInput) {
//           return true;
//         } else {
//           console.log("You must enter an Email address for your manager!");
//           return false;
//         }
//       },
//     },
//     {
//       type: "input",
//       name: "internSchool",
//       message: "What is your Intern's school? (Required)",
//       validate: (managerOfficeNumberInput) => {
//         if (managerOfficeNumberInput) {
//           return true;
//         } else {
//           console.log("You must enter a school for your Intern!");
//           return false;
//         }
//       },
//     },
//   ]);
// };

//collecting Employee information with prompts
const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: "confirm",
      name: "addEmployee",
      message: "Would you like to add an employee to the team? (Required)",
      default: true,
    },
    {
      type: "input",
      name: "employeeName",
      message: "What is the Employee's Name? (Required)",
      when: (confirm) => confirm.addEmployee === true,
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a name for your employee!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is your employee's ID number? (Required)",
      when: (confirm) => confirm.addEmployee === true,
      validate: (employeeIdInput) => {
        if (employeeIdInput) {
          return true;
        } else {
          console.log("You must enter a valid ID number for your employee!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeEmail",
      message: "What is your employee's email address? (Required)",
      when: (confirm) => confirm.addEmployee === true,
      validate: (employeeEmailInput) => {
        if (employeeEmailInput) {
          return true;
        } else {
          console.log("You must enter an Email address for your employee!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "employeeRole",
      message: "What is your Employee's role? (Required)",
      when: (confirm) => confirm.addEmployee === true,
      choices: ["Engineer", "Intern", "Finished building team"],
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is your Engineer's GitHub username? (Required)",
      when: (role) => role.employeeRole === "Engineer",
      validate: (engineerGithubInput) => {
        if (engineerGithubInput) {
          return true;
        } else {
          console.log("You must enter a GitHub username for your Engineer!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is your Intern's school?",
      when: (role) => role.employeeRole === "Intern",
      validate: (internSchoolInput) => {
        if (internSchoolInput) {
          return true;
        } else {
          console.log("You must enter a school for your Intern!");
          return false;
        }
      },
    },
  ]).then(answers => {
    if(answers.addEmployee === true) {
      if(answers.employeeRole === "Engineer") {
        var engineer = new Engineer(
          answers.employeeName,
          answers.employeeID,
          answers.employeeEmail,
          answers.engineerGithub
        );
        teamMembers.push(renderEngineer(engineer));
      }
      if(answers.employeeRole === "Intern") {
        var intern = new Intern(
          answers.employeeName,
          answers.employeeID,
          answers.employeeEmail,
          answers.school
        );
        teamMembers.push(renderIntern(intern));
      }
      // console.log(answers);

      return promptEmployee();
  }
});
};

// create init function to create employee
promptManager().then((answers) => {
  var manager = new Manager(
    answers.managerName,
    answers.managerID,
    answers.managerEmail,
    answers.managerOfficeNumber
  );
  // fs.writeFileSync("./dist/team.html", renderManager(manager), "utf-8");
  teamMembers.push(renderManager(manager));
})
.then(promptEmployee)
.then( () => {
   fs.writeFileSync("./dist/team.html", HTMLtemplate(), "utf-8");

})

function HTMLtemplate() {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${teamMembers.join('')}
</body>
</html>
    `
}
// promptIntern().then((answers) => {
//   console.log(answers);
//   var intern = new Intern(
//     answers.internName,
//     answers.internID,
//     answers.internEmail,
//     answers.internSchool
//   );
//   // fs.writeFileSync("./dist/team.html", renderIntern(intern), "utf-8");
//   teamMembers.push(renderIntern(intern));
// });

// promptEngineer().then((answers) => {
//   console.log(answers);
//   var engineer = new Engineer(
//     answers.engineerName,
//     answers.engineerID,
//     answers.engineerEmail,
//     answers.engineerGithubInput
//   );
//   teamMembers.push(renderEngineer(engineer));

// });
