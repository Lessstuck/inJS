// reads text file with a bunch of numbers
// converts to array and sorts in increasing order using quickSort
// counts comparisons while quicksorting

// const { randomFill } = require("crypto");

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
    quickSort(numberArray, 0, len - 1);  // first quickSort call
    for (let i = 0; i < 10; i++) {
        console.log(`array: ${numberArray[i]}`);
    };
    console.log(`comparisons: ${len}`);
});

function partition(A, l, r) {
    let p = A[l];
    let i = l + 1;
    for (let j = l + 1; j <= r; j++) {
        if (A[j] < p) {
            swap(A[j], A[i]);
            i++; 
        }
    }
    swap(A[l], A[i - 1]);
    return (i - 1);
}

function quickSort(A, l, r) {
    if (l >= r) {
        return;
    }
    i = choosePivot(A, l, r)
    swap(A[l], A[i]);
    let j = partition(A, l, r);
    quickSort(A, l, j - 1);
    quickSort(A, j + 1, r);
}

function swap(X, Y) {
    let temp = X;
    Y = X;
    X = temp;
}

function choosePivot(A, l, r) {
    return l;
}