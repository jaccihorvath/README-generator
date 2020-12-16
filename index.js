// Requirements
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);


// Function to validate user input
function validateInput(value) {
    if (value) {
        return true;
    } else {
        return "Please enter a valid input."
    }
}


//Inquirer prompts
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
            name: "username",
            message: "Please provide your GitHub username:",
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
            choices: [ "MIT", "GPL", "Apache", "ISC", "MPL" ]
        },
    ]);
};



// Function to generate README.md
const generateReadme = (answers) =>
`![License Badge](https://img.shields.io/badge/License-${answers.license}-green.svg](https://shields.io/)
# ${answers.title}

## Description
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Tests
${answers.test}

## Contributing
${answers.contribution}

## Questions
Find [${answers.username} on GitHub](https://github.com/${answers.username}) or email [${answers.email}](mailto:${answers.email}) with additional questions.

## License
Copyright (c) [${answers.username}](https://github.com/${answers.username}).
Licensed under the ${answers.license} License.
`


// Initialize program
promptUser()
.then((answers) => writeFileAsync('README.md', generateReadme(answers)))
.then(() => console.log("Success! README.md file created"))
.catch((err) => console.error(err));