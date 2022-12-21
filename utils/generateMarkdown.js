const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const writeToFile = function (markdown) {
  fs.writeFile('newREADME.md', markdown, (err) => {
    if (err)
      throw err;
    console.log('Success! Your README has been generated')
  });
};

const generateMarkdown = function (data) {

  let licenseChoice = `${data.license}`;
  let licenseLink = '';
  let licenseKey = '';
  if (licenseChoice === 'MIT License') {
    licenseLink = 'https://opensource.org/licenses/MIT';
    licenseKey = 'MIT-yellow';
  };
  if (licenseChoice === 'GNU GPL v2') {
    licenseLink = 'https://opensource.org/licenses/GPL-2.0';
    licenseKey = 'GPL%20v2-blue';
  };
  if (licenseChoice === 'Apache') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
    licenseKey = 'Apache%202.0-blue';
  };
  if (licenseChoice === 'GNU GPL v3') {
    licenseLink = 'https://opensource.org/licenses/GPL-3.0';
    licenseKey = 'GPL%20v3-blue';
  };
  if (licenseChoice === 'BSD 3-Clause License') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
    licenseKey = 'BSD%203--Clause-blue';
  };
  if (licenseChoice === 'BSD 2-Clause License') {
    licenseLink = 'https://opensource.org/licenses/BSD-2-Clause';
    licenseKey = 'BSD%202--Clause-orange';
  };
  if (licenseChoice === 'None') {
    licenseLink === false
  };

  let readmeTemplate =
    `# ${data.title}


  ## Description

  ${data.description}
`;
  if (licenseLink) {
    readmeTemplate += `![licensebadge](https://img.shields.io/badge/License-${licenseKey}.svg)`
  };

  let toc = `


  ## Table of contents
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  `;
  let templateCont =
    `
  

  ## Usage

  ${data.usage}


  ## Installation

  ${data.installation}


  ## Contributing

  ${data.contribution}


  ## Tests

  ${data.tests}


  ## Questions
  
  ${data.issues}

  For any further questions please reach out via:

  [Github](https://github.com/${data.github})

  [Email](mailto:${data.email})
`;
  if (licenseLink) {
    toc += '[License](#License)';
    templateCont += `
  
  
  ## License

  This application is using ${licenseChoice}. for more information please visit ${licenseLink}.
  `
  };
  readmeTemplate += toc;
  readmeTemplate += templateCont;
  return readmeTemplate
}

module.exports = { genMark: generateMarkdown, writeFile: writeToFile };
