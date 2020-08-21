fs = require("fs");

var numberArray = [];


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
            // console.log(numberArray[i]);
        };
        callback(null, data);
    });
}

readContent(function (err, data) {
    let A = [];
    let B = [];
    let C = [];
    let len = numberArray.length;
    function recurse(C) {
        if (len < 2) {
            return 0;
        }
        for (let j = 0; j < len / 2; j++) {
            A[j] = C[j];
        }
        for (let k = 0; k < len; k++) {
            B[k] = C[k + len/2];
        }
        len = Math.floor(len / 2);
        recurse(A);
        recurse(B);
    }

    console.log(`length: ${len}`);
    console.log(`A ${A}`);
    console.log(`C ${C}`);
});



