var fs = require("fs");

// read text file, convert to array of arrays of integers
let fileText = fs.readFileSync('Median.txt');
let fileString = String(fileText);
fileStringLines = fileString.split(/\r\n/);
fileStringLinesLength = fileStringLines.length - 1;
for (let i = 0; i < fileStringLinesLength; i++) {
    fileStringLines[i] = Number(fileStringLines[i])
}
let streamArray = fileStringLines;
let streamArrayLength = streamArray.length;

console.log(streamArrayLength)
console.log(streamArray[0])
console.log(streamArray[9999])