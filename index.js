const { prompt } = require("inquirer");
// const mysql = require("mysql2");
// const { updateEmployeeRole } = require("../../employee-tracker/db");
const db = require("./db");
require("console.table");

init();

function init() {
    runPrompts();
}

function runPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View all roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "View all employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add a department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Add a role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Add an employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update employee role",
                    value: "UPDATE_EMPLOYEE"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }

    ]).then(res => {
        let choice = res.choice;
        // call function from user input
        switch (choice) {
            case "VIEW_DEPARTMENTS":
                viewAllDepartments();
                break;
            case "VIEW_ROLES":
                viewAllRoles();
                break;
            case "VIEW_EMPLOYEES":
                viewAllEmployees;
                break;
            case "ADD_DEPARTMENT":
                createDepartment();
                break;
            case "ADD_ROLE":
                createRole();
                break;
            case "ADD_EMPLOYEE":
                createEmployee();
                break;
            case "UPDATE_EMPLOYEE":
                updateEmployee();
                break;
            default:
                quit();
        }
    })
}

//view  employees
function viewAllEmployees() {
    db.allEmployees()
    .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    })
    .then(() => runPrompts());
}

//view roles 
function viewAllRoles() {
    db.allRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    })
    .then(() => runPrompts());
}

//add role
function createRole() {
    db.allDepartments() 
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));

            prompt([
                {
                    name: "title",
                    message: "What is te name of the role?"
                },
                {
                    name: "salary",
                    message: "What is the salary rate?"
                },
                {
                    type: "list",
                    name: "department_id",
                    messafe: "Which department does the role fall under?",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.addrole(role)
                        .then(() => console.log(`Added ${role.title} to the database`))
                        .then(() => runPrompts())
                })
        })
}

//add department
function createDepartment() {
    prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
        .then(res => {
            let name = res;
            db.addDepartment(name)
            .then(() => console.log(`Added ${name.name} to the database`))
            .then(() => runPrompts())
        })
}


//add employee
function createEmployee() {
    prompt([
        {
            name: "first_name",
            message: "What's the first name of the employee?"
        },
        {
            name: "last_name",
            message: "What's the last name of the employee?"
        }
    ])
        .then(res => {
            let firstName = res.first_name;
            let lastName = res.last_name;

            db.allRoles()
                .then(([rows]) => {
                    let roles = rows;
                    const roleChoices = roles.map(({ id, title}) => ({
                        name: title,
                        value: id
                    }));

                    
                })
        })
}