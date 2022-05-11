#!/usr/bin/env node
const { exec } = require("child_process");
const fs = require("fs");
const consola = require("consola")
const CURR_DIR = process.cwd()
const generator = require('./services/generator')
const questions = require('./services/questions')
const content = require('./services/contents');




questions().then((response) => {
    const projectName =  response.projectName;
    const templatePath = `${__dirname}/templates/backend-template`;
    
    console.log(response)
//  Heres where we create the directory for the project
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);


    consola.info('making your backend project right now')
    consola.info('Be patient, this might take a few minutes...')
    exec(`cd ${projectName} && npm i`, (err, stdout, stderr) => {
        if (err){
            consola.error(`Hmmmm... We've come across an error, but don't worry: ${err}`);
            consola.warn(`These warning could help you with this error: ${stderr}`);
            return;
        } else {
            consola.warn(stdout);
            exec(`cd ${projectName} && npm audit`, (err, stdout, stderr) => {
                consola.warn(`These are some warnings but they\'re no big deal, trust me: ${stdout}`);
                consola.success(`Your project has been successfully built!!!`);
                consola.success(`Your project is inside of your ${CURR_DIR} directory, run this command to enter your project: \n
                > cd ${projectName} <`);
                consola.success('After that, all you have to do is run > npm start < to get it going.');
            })
        }
        return;
    })
    //  calling the functions to create the directory and choose which files will be created
    generator(templatePath, projectName);
    dynamicFiles(response, projectName)
})


function dynamicFiles(response, projectName){
    
    // Writing .env file
    const dotenv = content.dotenvFile(response)

    fs.writeFileSync(`${CURR_DIR}/${projectName}/.env`, dotenv)
}