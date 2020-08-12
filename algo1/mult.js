
const x = BigInt(process.argv[2]);
const y = BigInt(process.argv[3]);
let xs = x.toString();
const xsl = xs.length;

// print string, character by character
process.stdout.write("stringy:  ");
for (let i = 0; i < xsl; i++)    {
    process.stdout.write(xs[i]);
};
console.log("");

console.log("string: " + xs);

console.log("Native JS Multiplication: "  + (x * y));
console.log("Grade School Multiplication: " + (x * y));

function gradeSchoolMult(a, b) {
    let al = a.length

}