function primitiveMultiply(x, y) {
    let rando = Math.random();
    if (rando < .2) {
        return (x * y);
    }
    // return ("rando");
    throw new Error("MultiplicationFailure: " + rando);
};

function retry(x, y) {
    let retried;
    try {
        return primitiveMultiply(3, 5);
        // retried = primitiveMultiply(3, 5);
        // console.log(retried);
    } catch (error) {
        return retry(x, y);
    }
}

console.log(retry(3.5));