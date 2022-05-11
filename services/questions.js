const inquirer = require("inquirer");

function promptUser(){
    return inquirer.prompt([
        {
            name: 'projectName',
            type: 'input',
            message: 'Enter the name of this project: ',
            validate: (input) => {
                if (/^([A-Za-z\-\_\d])+$/.test(input)) {
                    return true;
                } else {
                    return 'Project name must contain letters, numbers, underscores and hashes only.';
                }
            }
        },
        {
            name: 'serverPort',
            type: 'input',
            message: 'Enter port number: ',
            validate: (input) => {
                if (/^([0-9]{4})$/.test(input)) {
                    return true;
                } else {
                    return 'Port number must be 4 digits ';
                }
            }
        },
        {
            name: 'mongoURI',
            type: 'input',
            message: "Enter your exact Mongo URI: "
        }
    ])
}

module.exports = promptUser