#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

 console.log(chalk.bold.rgb(204,204,204)(`\n \t\t  <<< ======================================================== >>>\n`));
 console.log(chalk.bold.rgb(204,204,204)(chalk.magenta.bold(`\t\t\tWelcome To \` code With Yusra \` Word Counter Application\n`)));
 console.log(chalk.bold.rgb(204,204,204)(`\t\t     <<< ========================================================= >>> `))

 const answer:{
    sentence:string
 }= await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blue.bold("Enter your sentence to count the word:")
    }
 ])
 const words = answer.sentence.trim().split(" ")
 console.log(words);
 
 console.log( chalk.blue.bold`\nYour sentence word count is ${words.length}`);
 