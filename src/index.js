const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// array of questions for user
const questions = [
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
        name: 'dependencies',
    }, 
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    }, 
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'about',
    }, 
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
    }
];


// array of questions for user
const askQuestions = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
        });
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    askQuestions()
}

// function call to initialize program
init();
