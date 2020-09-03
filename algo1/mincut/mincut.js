var fs = require("fs");

var fileText = fs.readFileSync('./kargerMinCut.txt');

fileString = String(fileText);
let cr = /\r/g;
let nl = /\n/g;
let tb = /\t/g;
let fileArray = [];
let fileArrayThingy = [];
let fileArrayNumber = [];
let arrayOfArrays = [];

let fileStringLines = fileString.split(cr);
for (let i = 2; i >= 0; i--)    {
    let fileStringLine = fileStringLines[i];
    fileArray = fileStringLine.split(tb);
    for (let j = 0; j < 10; j++) {
        fileArrayNumber[j] = Number(fileArray[j]);
    };
    arrayOfArrays.push(fileArrayNumber);
};

console.log(`${arrayOfArrays[0][3]}`);

