// running time = 5:17


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

// console.log(Date())


for (let i = 0; i < streamArrayLength; i++) {
    // for (let i = 0; i < 5; i++) {
    // runningArray.push(streamArray[i]);
    // console.log(medianMaintainer(i));
    // runningMedian = runningMedian + medianMaintainer(i);

}
// console.log(runningMedian % 10000);
// console.log(runningMedian)
// console.log(Date())

function medianMaintainer(i) {
    if (i % 2 == 0) {
        // return bubbleSort(runningArray)[i / 2]
    } else {
        // return (bubbleSort(runningArray)[i / 2 - 0.5])
    }

}



let a = [6];

var minHeap = {
    size: function () {
        return a.length;
    },
    insert: function(a, x) {
        a.push(x);
        return a;
    },
    extractMin: function (a) {
        return a.shift();
    }
};

console.log(a)
console.log(minHeap.size(a))
console.log(minHeap.insert(a, 3))
console.log(minHeap.extractMin(a));

function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}