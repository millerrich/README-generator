const fs = require("fs");
const inquirer = require("inquirer");
const { prompt } = require("inquirer");

// questions to generate README
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Select license",
        name: "license",
        choices: [
            {
                key: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                value: "MIT"
            },
            {
                key: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
                value: "GPLv2"
            },
            {
                key: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
                value: "GPLv3"
            },
            {
                key: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                value: "APACHE 2.0"
            },
            {
                key: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                value: "BSD 3-clause"
            },
            {
                key: "no license",
                value: "None"
            }
        ]
    },
    {
        type: "input",
        message: "Contributors?",
        name: "contributors"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "test"
    },
    {
        type: "input",
        message: "Your Github username",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
    
];

function generateMarkdown(data) {
    
    return `
  
  # ${data.title}
  
  
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License
  ${data.license[0]}
  
  ## Contributors
  ${data.contributors}
  
  ## Test
  ${data.test}
  
  ## Questions
  For questions, you can contact the developer at:
  
  Github:[${data.username}]
  
  Email:[${data.email}]
  
  `};

function init() {
    prompt(questions).then(input => {
        
        const response = generateMarkdown(input);
        console.log(input.license);

        fs.writeFile("README.md", response, error => {
            if (error) {
                throw error;
            }
        })
    });
}
init();