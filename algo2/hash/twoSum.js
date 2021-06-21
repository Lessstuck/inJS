var fs = require("fs");

// read text file, convert to array of arrays of integers
let fileText = fs.readFileSync('2sum.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(/\n/);
fileStringLines.pop(); // remove trailing newline
fileStringLinesLength = fileStringLines.length - 1;
for (let i = 0; i < fileStringLinesLength; i++) {
    fileStringLines[i] = Number(fileStringLines[i])
}
let streamArray = fileStringLines;
let streamArrayLength = streamArray.length;
let count = 0;

for (let t = -10000; t <= 10000; t++)   {
// for (let t = -5; t <= 5; t++)   {
    // for (let u = 0; u < streamArrayLength; u++) {
    for (let u = 0; u < 1000; u++) {
        for (let v = 0; v < 1000; v++)   {
            if (streamArray[u] + streamArray[v] == t) {
                count++;
            }
        }
    }
}
console.log(count)