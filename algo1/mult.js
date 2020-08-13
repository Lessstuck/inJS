
const x = BigInt(process.argv[2]);
const y = BigInt(process.argv[3]);
let xs = x.toString();
let xsl = xs.length;

let a = bigSplit(x);
let b = bigSplit(y);

console.log("Native JS Multiplication: " + (x * y));
console.log("Karatsuba Multiplication: " + a);
console.log("Karatsuba Multiplication: " + b);

// function kara(m, n) {

// }

function bigSplit(number) {
    number = number.toString()
    len = number.length;
    if (len < 2) {
        console.log('too small');
        return;
    }
    let a = number.slice(0, len/2);
    let b = number.slice(len/2);
    return [a, b];
}