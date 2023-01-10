// required dependencies
const fs = require('fs'); 
const inquirer = require('inquirer');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

// team classes
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

// creates page
const generateHTML = require('./src/generateHTML');

// team array
const teamArray = []; 

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?", 
            validate: answer => {
                if (answer !== '') {
                    return true;
                }
                return 'Please enter at least one character.'; 
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true; 
                } 
                return 'Please enter a positive number greater than zero.';
                
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: answer => {
                const pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(answer);
                if (pass) {
                    return true;
                } 
                return 'Please enter a valid email address.';
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number.",
            validate: answer => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass ) {
                    return true;
                } 
                return 'Please enter a positive number greater than zero.';
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add members to this manager's team?",
            default: false
        }
    ])
    .then(employeeData => {
        let { role, name, id, email, officeNumber, confirmAddEmployee } = employeeData; 
        let employee = new manager(name, id, email, officeNumber);

        console.log(employee);

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("Please enter the employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log("Please enter the employee's ID.");
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log('Please enter an email.');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username.",
            when: (input) => input.role === "Engineer",
            validate: github => {
                if (github ) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school name.",
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school ) {
                    return true;
                } else {
                    console.log("Please enter the intern's school name.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { role, name, id, email, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new engineer(name, id, email, github);
            console.log(employee);

        } else if (role === "Intern") {
            employee = new intern(name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// function to save ./dist/index.html
const writeFile = data => {
    if(!fs.existsSync(DIST_DIR)){
        fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, data, 'utf-8');
}; 

// start by adding a manager
addManager()
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });