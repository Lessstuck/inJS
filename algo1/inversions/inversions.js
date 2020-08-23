fs = require("fs");

var numberArray = [];
var len;

// read text file of numbers and convert to array of integers
function readContent(callback) {
    fs.readFile('./IntegerArraySmall.txt', (err, data) => {
        if (err) return callback(err);
        dataString = String(data);
        let re = /\r/g;
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
    let sorted = mergeSort(numberArray);
    len = numberArray.length;
    for (let k = 0; k < len; k++)    {
        console.log("sorted: " + sorted[k]);
    }
});

function mergeSort(C) {
    if (C.length < 2) {
        return C;
    }
    var mid = Math.floor(C.length / 2);
    var A = mergeSort(C.slice(0, mid));
    var B = mergeSort(C.slice(mid));
    console.log(`A: ${A}`);
    console.log(`B: ${B}`);
    var mergeSorted = merge(A, B);
    console.log(`mergeSorted: ${mergeSorted}`);
    return mergeSorted;
}

function merge(left, right) {
    console.log(`left: ${left}, right: ${right}`)
    var lena = left.length;
    var lenb = right.length;
    let merged = [];
    let i = 0;
    let j = 0;
    let k;
    for (k = 0; k < (lena + lenb); k++) {
        if (i >= lena) {
            merged[k] = right[j];
            j++;
        }
        else if (j >= lenb) {
            merged[k] = left[i];
            i++;
        } else
            if (left[i] < right[j]) {
                merged[k] = left[i];
                i++;
            } else if (left[i] > right[j]) {
                merged[k] = right[j];
                j++;
            } else { // if elements are non-distinct
                merged[k] = left[i];
                i++;
            }
    };
    return merged;
}