// function generateHTML(employeeStorage) {
//     return `<!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Profile generator</title>
//     <link rel="stylesheet" href="./assets/style.css">
//   </head>
  
//   <body>
//     ${cardGenerator()}
//   </body>
//   </html>
//       `;

   
// }


// function cardGenerator(oEmployee) {
//     // TO DO: change the values to the match employee information
//     if(oEmployee.role === 'Enginner'){
//         renderEngineer = () => {
//             return `
//             <div class="card">
//             <div class="container">
//                 <h2>${oEmployee.engineername}</h2>
//                 <h2>${oEmployee.role}</h2>
//                 <h4> ID: ${oEmployee.engineerID}</h4>
//                 <h4> Github: ${oEmployee.github}
//             </div>
//         </div>`
//         }
//     }
// }


   

//     const sHtmlFooter = ' </div>\
//         </div>\
//     </body>\
//     </html>';
//     sFullHTML+=sHtmlHeader;
//     //TODO:loop employeeStorage
//     sFullHTML+=cardGenerator({});

//     sFullHTML+=sHtmlFooter;
//     console.log(sFullHTML);
//     // write the sFullHTML in to a file- ASK about this:
//     function sFullHTML(employeeStorage, data) {
//         fs.writeFileSync(sFullHTML, data, "employeeStorage") 
//         console.log("File written successfully\n");
//         console.log("The written has the sFullHTML:");

//         fs.sFullHTML(employeeStorage), 
//         cardGenerator(data), 
//         (err)=>{
//             err ? console.log(err) :
//             console.log(`Success!`)
//         })}



// function cardGenerator(oEmployee) {
//     // TO DO: change the values to the match employee information
//     let sCard = '<div class = "card">\
//         <div class="blueContainer">\
//             <h4>George</h4>\
//             <h4>Engineer</h4>\
//         </div>\
//         <div class="whiteContainer">\
//             <div class="infoContainer">\
//                 <div class= "row">\
//                     <span class="data">ID:\
//                     </span>\
//                     <span class="value">2\
//                     </span>\
//                 </div>\
//                 <div class= "row">\
//                     <span class="data">Email:\
//                     </span>\
//                     <span class="value">@gmail.com\
//                     </span>\
//                 </div>';
            
//                 //this section below will be different based on the employees data requirements such as github, school, etc. I need an if statement or a switch statement.
//                 sCard+='\
//                 <div class= "row">\
//                     <span class="data">Office Number:\
//                     </span>\
//                     <span class="value">010-998-2000\
//                     </span>\
//                 </div>';
//             sCard+='\
//             </div>\
//         </div>\
//     </div>';
//     return sCard;
// }
// module.exports = generateHTML

// // const Employee = require("./lib/Employee")
