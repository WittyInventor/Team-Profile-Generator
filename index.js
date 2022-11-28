const inquirer = require("inquirer")

const Manager = require("./lib/Manager")

const Engineer = require("./lib/Engineer")

const Intern = require("./lib/Intern")

const fs = require("fs")

const generateHTML = require('./src/page-template.js')


let employeeStorage = []

const managerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name',
},
{
    type: 'input',
    message: 'What is your ID?',
    name: 'Id',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'input',
    message: 'What is your office number?',
    name: 'officenumber',
},
];

const selectQuestions = [{
    type: 'list',
    name: 'selection',
    message: 'Add an engineer or add an intern or exit',
    choices: ['intern', 'engineer', `exit`]
},

];

const engineerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name',
},
{
    type: 'input',
    message: 'What is your ID?',
    name: 'Id',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'input',
    message: 'What is your github link?',
    name: 'github',
},
];

const internQuestions = [{
    type: 'input',
    name: 'name',
    message: 'What is your name',
},
{
    type: 'input',
    message: 'What is your ID?',
    name: 'Id',
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email',
},
{
    type: 'input',
    message: 'What is your  school?',
    name: 'school',
},
];

function writeToFile(fileName, data) {
console.log(`writeToFile`);
return fs.writeFileSync(fileName, data)
}

function init() {
    inquirer.prompt(managerQuestions)
        .then(data => {

            let Manager_1 = new Manager(data.Id, data.name, data.email, data.officenumber);
            // we are using the class of Manager to make a Manager_1
            console.log(data)
            console.log(Manager_1)
            employeeStorage.push(Manager_1);
            console.log("Employee Storage: ", employeeStorage);
            questionchoices();
        })
}


function questionchoices() {
    inquirer.prompt(selectQuestions)
        .then(data => {
            if (data.selection == `engineer`) {
                inquirer.prompt(engineerQuestions).then(engineerData => {
                    console.log("engineerData: ", engineerData)
                    console.log("data: ", data)
                    let engineer = new Engineer(engineerData.name, engineerData.email, engineerData.Id, engineerData.github)
                    employeeStorage.push(engineer);
                    console.log("new Engineer: ", engineer)
                    questionchoices();
                })
            } else if (data.selection == `intern`) {
                inquirer.prompt(internQuestions).then(internData => {
                    console.log("internData: ", internData)
                    console.log("data: ", data)
                    let intern = new Intern(internData.name, internData.email, internData.Id, internData.school)
                    console.log("new Intern: ", intern)
                    employeeStorage.push(intern);


                    console.log(data)
                    questionchoices()

                })

            } else if (data.selection == `exit`) {
                
              generateHTML(employeeStorage);
            } else if (data.selection== `exit`) {
                writeToFile (`./dist/index.html`, generateHTML({...data }))
                console.log(`your profile has been made!`)
            }
        }) 
    }
init()




function generateHTML(employeeStorage) {
    let sFullHTML='';
    const sHtmlHeader = '<!DOCTYPE html>\
    <html lang="en">\
    <head>\
        <title>Team Manager </title>\
        <link rel="stylesheet" href="style.css">\
    </head>\
    <body>\
        <div class = "mainContainerHoldsAll">\
            <div class = "headContainer">\
                <h1>My Team</h1> \
            </div>\
            <div class = "maincardContainers">';
    const sHtmlFooter = ' </div>\
        </div>\
    </body>\
    </html>';
    sFullHTML+=sHtmlHeader;
    //TODO:loop of employee storage
    for (const employeeStorage of employeeStorage) {
  output(employeeStorage);
}


    sFullHTML+=cardGenerator({});

    sFullHTML+=sHtmlFooter;
    console.log(sFullHTML);
    // write the sFullHTML in to a file- ASK about this:
    function sFullHTML(employeeStorage, data) {
        fs.writeFileSync(sFullHTML, data, "employeeStorage") 
        console.log("File written successfully\n");
        console.log("The written has the sFullHTML:");

        fs.sFullHTML(employeeStorage), 
        cardGenerator(data), 
        (err)=>{
            err ? console.log(err) :
            console.log(`Success!`);
        }
      }
}


function cardGenerator(oEmployee) {
    // TO DO: change the values to the match employee information
    let sCard = '<div class = "card">\
        <div class="blueContainer">\
            <h4>George</h4>\
            <h4>Engineer</h4>\
        </div>\
        <div class="whiteContainer">\
            <div class="infoContainer">\
                <div class= "row">\
                    <span class="data">ID:\
                    </span>\
                    <span class="value">2\
                    </span>\
                </div>\
                <div class= "row">\
                    <span class="data">Email:\
                    </span>\
                    <span class="value">@gmail.com\
                    </span>\
                </div>';
            
                //this section below will be different based on the employees data requirements such as github, school, etc. I need an if statement or a switch statement.
                sCard+='\
                <div class= "row">\
                    <span class="data">Office Number:\
                    </span>\
                    <span class="value">010-998-2000\
                    </span>\
                </div>';
            sCard+='\
            </div>\
        </div>\
    </div>';
    return sCard;
}
// const Employee = require("./lib/Employee")


// let Employee1 = new Employee("Ana", "gymboree@gmail.com");
// console.log(Employee1.getId());

// let Supervisor = new Employee("John", "john@gmail.com");
// console.log(Supervisor.getRole());


// let Manager_1 is a new variable with the information (that is =) of the new Manager class. 

// let Manager_1 = new Manager("Stasia", "stasia@gmail.com", "010-880-9900");
// console.log(Manager_1);

