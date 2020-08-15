
const x = BigInt(process.argv[2]);
const y = BigInt(process.argv[3]);
let xs = x.toString();
let xsl = BigInt(xs.length);
let xslzeros = (BigInt(10) ** xsl);
let xslhalfzeros = (BigInt(10) ** (xsl/BigInt(2)));

let left = bigSplit(x);
let right = bigSplit(y);
let a = BigInt(left[0]);
let b = BigInt(left[1]);
let c = BigInt(right[0]);
let d = BigInt(right[1]);
let step1 = BigInt(a * c);
let step2 = BigInt(b * d);
let step3 = BigInt((a + b) * (c + d));
let step4 = step3 - step2 - step1;
let result = (step1 * xslzeros + step2 + step4 * xslhalfzeros);

console.log("Native JS Multiplication: " + (x * y));
console.log("Karatsuba Multiplication: " + result);

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