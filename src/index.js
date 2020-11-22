const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsyn = util.promisify(fs.writeFile);

// ask questions
const askQuestions = () => 
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What\'s the project name?',
            name: 'projectName',
        },
        {
            type: 'input',
            message: 'Please write a short description of your project',
            name: 'description',
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'install',
            default: function() {
                return 'npm i';
            }
        }, 
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'run',
            default: function() {
                return 'npm run test';
            }
        }, 
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usage',
        }, 
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing',
        }
    ]);

// arrow function to write README file
const generateReadmeFile = (data) => `
# ${data.projectName}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.install}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} license.

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

${data.run}

## Questions

If you have any questions about the repo, open issue or contact me directly at [${data.email}](${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}).
`;

// function to initialize program
function init() {
    askQuestions()
        .then((data) => writeFileAsyn("README.md", generateReadmeFile(data)))
        .then(() => console.log('Sucessfully wrote to README.md'))
        .catch((err) => console.error());
}

// function call to initialize program
init();
