function primitiveMultiply(x, y) {
    let rando = Math.random();
    if (rando < .2) {
        return (x * y);
    }
    return ("rando");
};
let retried = primitiveMultiply(3, 5)
console.log(retried);
