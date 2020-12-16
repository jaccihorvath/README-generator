const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

// const writeFileAsync = util.promisify(fs.writeFile);

function validateInput(value) {
    if (value) {
        return true;
    } else {
        return "Please enter a valid input."
    }
}

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
            validate: validateInput
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a brief description of your project:",
            validate: validateInput
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?",
            validate: validateInput
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide instructions and examples for use:",
            validate: validateInput
        },
        {
            type: "input",
            name: "contribution",
            message: "Please list any collaborators or third-party assets that require attribution:",
            validate: validateInput
        },
        {
            type: "input",
            name: "test",
            message: "Please provide test instructions for your project:",
            validate: validateInput
        },
        {
            type: "input",
            name: "github-username",
            message: "Please provide your GitHub username:",
            validate: validateInput
        },
        {
            type: "input",
            name: "github-url",
            message: "Please provide a link to your GitHub profile:",
            validate: validateInput
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address:",
            validate: validateInput
        },
        {
            type: "list",
            name: "license",
            message: "Which license would you like to include?",
            choices: [ "MIT", "GPLv3", "Apache 2.0", "GNU General Public License v3.0", "BSD 3-Clause", "none"]
        },
    ]);
};

promptUser();