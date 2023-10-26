// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "(Required) What is the title of your project?",
        name: "title",
        default: "Project Title",
        validate: function (title) {
            if (title) {
                return true;
            } else {
                console.log("Please enter your project title...");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "(Required) Please enter a description of your project:",
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log("Please enter a description of the repository...");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "installConfirm",
        message: "Would you like to include installation instructions?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions:",
        when: ({installConfirm}) => {
            if (installConfirm) {
                return true;
            } else {
                console.log("No installation instructions needed.");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "usageConfirm",
        message: "Would you like to include usage instructions?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter instructions on how to use the application:",
        when: ({usageConfirm}) => {
            if (usageConfirm) {
                return true;
            } else {
                console.log("No usage instructions needed.");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "contributionConfirm",
        message: "Would you like to include instructions on how others can contribute to your project??"
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter how others can contribute to this project:",
        when: ({contributionConfirm}) => {
            if (contributionConfirm) {
                return true;
            } else {
                console.log("No contributions needed.");
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "testingConfirm",
        message: "Would you like to include testing instructions?"
    },
    {
        type: "input",
        name: "testing",
        message: "Please enter how users can test this application:",
        when: ({testingConfirm}) => {
            if (testingConfirm) {
                return true;
            } else {
                console.log("No testing available.");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license for this project:",
        choices: ["None", "Apache", "BSD2", "BSD3", "CDDL", "EPL", "GPL", "LGPL", "MIT", "MPL"],
        validate: license => {
        if (license) {
            return true;
          } else {
            console.log("Please select a license...");
            return false;
          }
        }
    },
    {
        type: "input",
        name: "username",
        message: "(Required) What is your GitHub username?",
        default: "eymerin",
        validate: function (username) {
            if (username) {
                return true;
            } else {
                console.log("Please enter your GitHub username...");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "(Required) Please enter your email address:",
        validate: function (email) {
            if (email) {
                return true;
            } else {
                console.log("Please enter your email address...");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "questions",
        message: "(Required) Please enter instructions for those who have questions to contact you:",
        validate: function (questions) {
            if (questions) {
                return true;
            } else {
                console.log("Please enter instructions for those with questions...");
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log("An error occurred:" + error);
        }
    })
}

const writeAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        console.log("A README file is being generated from your responses: ", userInput);
        const markDown = generateMarkdown(userInput);
        console.log(markDown);
        await writeAsync("README.md", markDown);
    } catch (error) {
        console.log("An error occurred:" + error);
    }
    
}

// Function call to initialize app
init();
