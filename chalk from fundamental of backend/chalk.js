// used to style string using packages

import chalk from 'chalk' //as it is in ES6 format so we go to json file and write below author "type": "module" and below test we write "dev": "node chalk.js"
console.log('hello chalk')

console.log(chalk.blue('blue chalk'))//this format: chalk.color name('text') is used to add color to text

//this is the format to concat or join three words of different colours
console.log(`${chalk.blue('hello')} ${chalk.red('chalk')} ${chalk.yellow('!!!')}`)

//to make it underline and bold
console.log(`${chalk.yellow.underline.bold('hello world')}`)


//more option can be explored by typing on google npm chalk and click on first link
