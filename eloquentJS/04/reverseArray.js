const [, , ...args] = process.argv;
let reversed = [];
let argslen = args.length;
for (let i = 0; i < argslen; i++)   {
    reversed[i] = args[argslen - i - 1];
}
console.log(`args: ${args} --- reversed: ${reversed}`);