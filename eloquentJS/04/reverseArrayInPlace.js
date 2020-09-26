let [, , ...args] = process.argv;
let argslen = args.length;
// console.log(`argslen - 1: ${argslen - 1}`);
console.log(`args: ${args}`);
for (let i = 0; i < (argslen/2); i++)   {
    swap(args[i], args[argslen - i - 1]);
}
console.log(`args: ${args}`);

function swap(a, b) {
    let stash = a;
    a = b;
    b = stash;
    return [a, b];
}
