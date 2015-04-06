var main_controller = require('./src/main_controller.js');
var fs = require('fs');

var output = main_controller.main();
fs.writeFileSync('output.txt',output);