fs = require("fs");

// let intArray = [];

fs.readFile('./IntegerArray.txt', (err, data) => {
    if (err) throw err;
    console.log("type: " + typeof (data));
    dataString = String(data);
    // intArray = data.split("\n");
    let re = /\r/g;
    let dataStringArray = dataString.split(re);
    for (let i = 0; i < 20; i++) {

        console.log(Number(dataStringArray[i]));
    }

});