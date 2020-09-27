let [, , ...args] = process.argv;
let argslen = args.length;
for (let i = 0; i < (argslen / 2); i++)   {
    let swapped = swap(args[i], args[argslen - i - 1]);
    args[i] = swapped[0];
    args[argslen - i - 1] = swapped[1];
}
console.log(`${args}`);

function swap(a, b) {
    let stash = a;
    a = b;
    b = stash;
    return [a, b];
}
