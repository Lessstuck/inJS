let loVal = parseInt(process.argv[2]);
let hiVal = parseInt(process.argv[3]);

console.log(`${loVal} --- ${hiVal}`);
console.log(`range: ${range(loVal, hiVal)}`);
console.log(`sum: ${sum(range(loVal, hiVal))}`);

function range(loVal, hiVal) {
    let array = [];
    for (let i = loVal; i <= hiVal; i++)    {
        array.push(i)
    }
    return array;
}

function sum(array) {
    let somme = 0;
    for (let i = 0; i < array.length; i++)  {
        somme = somme + array[i];
    }
    return somme;
}