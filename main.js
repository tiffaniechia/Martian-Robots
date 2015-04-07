var main_controller = require('./src/main_controller.js');
var fs = require('fs');
var chalk = require('chalk');

var output = main_controller.main();
console.log(chalk.green("Processing input.txt..."));

fs.writeFileSync('output.txt',output);
console.log(chalk.green("Successfully processed, check output.txt for results!"));