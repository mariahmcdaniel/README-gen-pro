const inquirer = require('inquirer');
const fs = require('fs')
const prompt = inquirer.createPromptModule();
const { genMark, writeFile } = require('./utils/generateMarkdown.js');

prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your application - what will it be used for?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How does one use your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How can one report issues with this application?',
        name: 'issues',
    },
    {
        type: 'input',
        message: 'How can others make contributions to your application?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please explain how testing can be done on your application:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Which license are you using for your application?',
        name: 'license',
        choices: ['No License Needed', 'MIT License', 'GNU GPL v2', 'Apache', 'GNU GPL v3', 'BSD 3-Clause License', 'BSD 2-Clause License']
    },
])
    .then(genMark)
    .then(writeFile)
