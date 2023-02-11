const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");

init();

function init() {
    runPrompts();
}

function runPrompts() {
    promt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View all departments"
                }
            ]
        }
    ])
}