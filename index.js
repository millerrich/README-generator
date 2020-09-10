const fs = require("fs");
const inquirer = require("inquirer");

// questions to generate README
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "Description"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "Usage"
    },
    {
        type: "list",
        message: "Select license",
        name: "License",
        choices: [
            "MIT",
            "GVL-GPL 3.0",
            "APACHE 2.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "How do you test your project?",
        name: "Test"
    },
    
    {
        type: "input",
        message: "Contact info for further questions",
        name: "Questions"
    },
    {
        type: "input",
        message: "Your Github username",
        name: "Username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    }
    
];

function init() {
    inquirer.prompt(questions);
}
init();