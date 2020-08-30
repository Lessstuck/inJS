// reads text file with a bunch of numbers
// converts to array and sorts in increasing order using quickSort
// counts comparisons while quicksorting

fs = require("fs");

var numberArray = [];
let A = [];
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
    for (let i = 9990; i < len; i++) {
        console.log(`array: ${numberArray[i]}`);
    };
    console.log(`comparisons: ${comparisonCount}`);
});

function partition(A, l, r) {
    let p = A[l];
    let i = l + 1;
    for (let j = l + 1; j <= r; j++) {
        // comparisonCount++;
        if (A[j] < p) {
            swap(A, i, j);
            i++; 
        }
    }
    swap(A, l, i - 1);
    return (i - 1);
}

function quickSort(A, l, r) {
    if (l >= r) {
        return;
    }
    comparisonCount = comparisonCount + (r - l + 1 - 1);
    i = choosePivot(A, l, r);
    swap(A, i, l);
    let j = partition(A, l, r);
    quickSort(A, l, j - 1);
    quickSort(A, j + 1, r);
}

function swap(Z, x, y) {
    let temp = Z[x];
    Z[x] = Z[y];
    Z[y] = temp;
}

function choosePivot(A, l, r) {
    // return l;
    // return r;
    // return (Math.floor(Math.random() * (r - l)) + l);
    return (l + Math.floor((r - l) / 2));
}