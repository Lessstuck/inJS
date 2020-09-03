var fs = require("fs");

var fileText = fs.readFileSync('./kargerMinCut.txt');

fileString = String(fileText);
let cr = /\r/g;
let nl = /\n/g;
let tb = /\t/g;
let fileArray = [];
// let fileStringLine = [];

let fileStringLines = fileString.split(cr);
// console.log(`${fileStringLines}`);
for (let i = 0; i < 3; i++)    {
    console.log(`${fileStringLines[i]}`);
    let fileStringSplit = fileStringLines[i].split[tb];
    console.log(`${fileStringSplit}`);
    // for (let j = 0; j < 10; j++) {
    //     fileArray[i][j] = Number(fileStringSplit[j]); 
    // };
};
