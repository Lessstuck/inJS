// primitiveMultiply succeeds 20% of the time
function primitiveMultiply(x, y) {
    let rando = Math.random();
    if (rando < .2) {
        return (x * y);
    }
    throw new Error("MultiplicationFailure: " + rando);
};

// catchs error to retry primitiveMultiply
function retry(x, y) {
    let retried;
    try {
        return primitiveMultiply(3, 5);
    } catch (error) {
        return retry(x, y);
    }
}

console.log(retry(3.5));