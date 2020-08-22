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
    let A = []; // left side of C
    let B = []; // right side of C
    len = numberArray.length;
    let sorted = mergeSort(numberArray);
    len = numberArray.length;
    for (let k = 0; k < len; k++)    {
        console.log("sorted: " + numberArray[k]);
    }
});

function mergeSort(C) {
    // let A = [];
    // let B = [];
    if (C.length < 2) {
        return C;
    }
    console.log(`Clength: ${C.length}`);

    var mid = Math.floor(C.length / 2);
    var A = mergeSort(C.slice(0, mid));
    var B = mergeSort(C.slice(mid));

    // for (let j = 0; j < len / 2; j++) {
    //     A[j] = C[j];
    // }
    // for (let k = 0; k < len / 2; k++) {
    //     B[k] = C[k + len / 2];
    // }
    console.log(`A: ${A}`);
    console.log(`B: ${B}`);
    // len = Math.floor(len / 2);
    let sortedA = mergeSort(A);
    // let sortedB = mergeSort(B);
    let checkitout = merge(A, B);
    return checkitout;
}

function merge(A, B) {
    var lena = A.length;
    var lenb = B.length;
    let merged = [];
    let i = 0;
    let j = 0;
    let k;
    for (k = 0; k < (lena + lenb); k++) {
        if (i >= lena) {
            merged[k] = B[j];
            j++;
        }
        else if (j >= lenb) {
            merged[k] = A[i];
            i++;
        } else
            if (A[i] < B[j]) {
                merged[k] = A[i];
                i++;
            } else if (A[i] > B[j]) {
                merged[k] = B[j];
                j++;
            } else { // if elements are non-distinct
                merged[k] = A[i];
                i++;
            }
    };
    return merged;
}