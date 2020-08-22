fs = require("fs");

var numberArray = [];
var len;

// read text file of numbers and convert to array of integers
function readContent(callback) {
    fs.readFile('./IntegerArray.txt', (err, data) => {
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
    for (let k = 0; k < 20; k++)    {
        console.log("sorted: " + sorted[k]);
    }
});

function mergeSort(C) {
    // console.log(`insidelength: ${len}`);
    let A = [];
    let B = [];
    if (len <= 2) {
        return C;
    }
    for (let j = 0; j < len / 2; j++) {
        A[j] = C[j];
    }
    for (let k = 0; k < len; k++) {
        B[k] = C[k + len / 2];
    }
    len = Math.floor(len / 2);
    return merge(mergeSort(A), mergeSort(B));
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
            } else {
            }
    };
    return merged;
}
