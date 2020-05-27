const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
const path = require("path");

const questions = [
    {
        type: "input",
        message: "what is your project title?",
        name: "title"
      },
      
      {
          type:"input",
          message: "please describe your project",
          name:"description"

      },

      {
        type: "input",
        message: "please list the table of content",
        name: "content"
      },
      {
        type: "input",
        message: "installation",
        name: "project"

      },
      {
        type:"input",
        message:"what is your github email",
        name:"email"
      },

    ];
    

function writeToFile (fileName,data){

    return fs.writeFile(path.join(process.cwd(),fileName),data, function (err, result) {
      if(err) console.log('error', err);
    });
  
   };

   //

   function readMe(){
     inquirer.prompt(questions).then ((questionResponse)=>{
       writeToFile("log.txt", generateMarkDown({...questionResponse}))
      
      
     })
     
   }

   readMe();