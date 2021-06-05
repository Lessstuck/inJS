// running time of linear O(n^2) = about 5 minutes
// running time of heap O(n * log2(n)) = less than 1 second!!
// correct answer 1213

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
let runningMedian = 0
let runningArray = [];

console.log(Date())
for (let i = 0; i < streamArrayLength; i++) {
// for (let i = 0; i < 5; i++) {
    runningArray.push(streamArray[i]);
    newMedian = medianMaintainer(i);
    runningMedian = runningMedian + newMedian;
}
console.log(runningMedian % 10000);
console.log(Date())

function medianMaintainer(i) {
    if (i % 2 == 0) {
        return bubbleSort(runningArray)[i / 2]
    } else {
        return (bubbleSort(runningArray)[i / 2 - 0.5])
    }

}

function bubbleSort(a) {
    for (let i = 0; i < a.length; i++)  {
        for (let j = 0; j < a.length; j++)  {
            if (a[j] > a[i]) {
                var temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}