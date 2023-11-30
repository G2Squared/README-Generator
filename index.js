// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Provide a short description explaining your project.',
    'What are the steps required to install your project?',
    'What are the instructions on how to use your project?',
    'List your credits and/or collaborators, if any, for your project:',
    'What license, if any, would you like for your project?',
    'If you would like others to contribute to your project, how can one do this?',
    'Provide an example on how someone can test your application:',
    'What is your github username?',
    'What is your email?',
];

const askQuestions = () => {
    return inquirer.prompt ([
        {
            type: 'input', // title of project
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input', // description of project
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input', // installation of project
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input', // usage of project
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input', // credits for project
            message: questions[4],
            name: 'credits',
        },
        {
            type: 'list', // license of project
            message: questions[5], 
            name: 'license',
            choices: ['MIT', 'WTFPL', 'GNU General Public License V3', 'ISC'],
        },
        {
            type: 'input', // contributions for project
            message: questions[6],
            name: 'contributions',
        },
        {
            type: 'input', // testing of project
            message: questions[7],
            name: 'test',
        },
        {
            type: 'input', // github username
            message: questions[8],
            name: 'github',
        },
        {
            type: 'input', // email
            message: questions[9],
            name: 'email',
        },
    ])
    }

// TODO: Create a function to initialize app
function init() {
    askQuestions()
    .then((answers) => {
        fs.writeFile('./fileCreated/README.md', generateMarkdown(answers), 
            (err) => err ? console.error(err) : console.log('File created sucessfully!'));
        });
}

// Function call to initialize app
init();
