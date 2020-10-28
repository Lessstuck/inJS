var fs = require("fs");

// read an format input, from text to array of arrays of integers
var fileText = fs.readFileSync('./scripts.js');
let fileString = String(fileText);