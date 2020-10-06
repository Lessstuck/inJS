
function deepEqual(x, y) {
    if (x === null) return "x is null"
    else if (y === null) return "y is null"
    else if (typeof (x) != "object" && typeof (y) != "object") {
        return (x == y);
    } else {
        const xKeyz = Object.keys(x);
        const yKeyz = Object.keys(y);
        for (let i = 0; i < xKeyz.length; i++)  {
            if (xKeyz[i] != yKeyz[i]) return false;
        }
        for (let i = 0; i < yKeyz.length; i++) {
            if (xKeyz[i] != yKeyz[i]) return false;
        }
        return true;
    }
}

const objectA = { foo: 3, bar: 2 };
const objectB = { foo: 2, bar: 1 };
const objectC = { foo: 12 };
const objectD = { foo: 3, bar: 2, bam: 0 };

console.log(deepEqual(3, 4));
console.log(deepEqual(3, 3));
console.log(deepEqual(objectA, objectB));
console.log(deepEqual(objectA, objectC));
console.log(deepEqual(objectA, objectD));