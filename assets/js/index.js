// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project

// import { name, draw, reportArea, reportPerimeter } from './modules/square.js';


const inquirer = require('inquirer');
const fs = require('fs')
const prompt = inquirer.createPromptModule();
import { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection } from './utils/generateMarkdown.js';

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
        message: 'How can one test your application?',
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
        choices: ['None', 'MIT License', 'GNU GPL v2', 'Apache', 'GNU GPL v3', 'BSD 3-Clause License', 'BSD 2-Clause License']
    },
])
    .then(generateMarkdown)
    .then(writeToFile)



    // .then((response) => {
    //     fs.appendFile('yourREADME.md', `${JSON.stringify(response)}\n`, (err) => {
    //         err ? console.log('error') : console.log('your README is ready!')
    //     })
    // });