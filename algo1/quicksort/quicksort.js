// reads text file with a bunch of numbers
// converts to array and sorts in increasing order using quickSort
// counts comparisons while quicksorting

const { randomFill } = require("crypto");

fs = require("fs");

var numberArray = [];
var len;
var comparisonCount = 0;  // for comparison count

// read text file of numbers and convert to array of integers
function readContent(callback) {
    fs.readFile('./QuickSort.txt', (err, data) => {
        if (err) return callback(err);
        dataString = String(data);
        let re = /\r\n/g;
        let dataStringArray = dataString.split(re);
        let dataStringArrayLength = dataStringArray.length;
        let dataArray = [];
        for (let i = 0; i < dataStringArrayLength; i++) {
            numberArray[i] = Number(dataStringArray[i]);
        };
        callback(null, data);
    });
}

readContent(function (err, data) {
    len = numberArray.length;
    let sorted = quickSort(numberArray);
    len = numberArray.length;
    for (let i = 0; i < 5; i++) {
        console.log(`array: ${numberArray[i]}`)
    };
    console.log(`comparisons: ${len}`);
});

function partition(A, l, r) {
    let p = A[l];
    let i = l + r;
    for (let j = l + 1; j <= r; j++) {
        if (A[j] < p) {
            let temp = A[i];
            A[i] = A[j];
            A[j] = temp;
        }
    }
}

function quickSort(A) {
    let p = A[0];
    let m = 0;
    let n = len;
    partition(A, m, n);
    // return merged;
}