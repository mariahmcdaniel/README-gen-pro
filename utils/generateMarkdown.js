const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const license = data.license;
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'GNU GPL v2') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (license === 'GNU GPL v3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'BSD 3-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'BSD 2-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const writeToFile = function (fileName, data) {
  fs.writeFile('yourREADME.md', data, (err) => {
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
  }

  let readmeTemplate =
    `# ${data.title}

  ## Description
  ${data.description}


  ## Table of contents
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)


  ## Usage 
  ${data.usage}


  ## Installation
  ${data.installation}


  ## Contributing
  ${data.contribution}


  ## Tests
  ${data.tests}
`;
  return readmeTemplate
}

module.exports = generateMarkdown;
