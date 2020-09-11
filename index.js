const fs = require("fs");
const inquirer = require("inquirer");

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
            "MIT",
            "GPLv2",
            "GPLv3",
            "APACHE",
            "BSD 3-clause",
            "None"
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
  ${data.license}
  
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
    inquirer.prompt(questions).then(input => {
        const response = generateMarkdown(input);
        console.log(input);

        fs.writeFile("README.md", response, error => {
            if (error) {
                throw error;
            }
        })
    });
}
init();