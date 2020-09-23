
let x = parseInt(process.argv[2]);
let y = parseInt(process.argv[3]);

function mini(a, b) {
    if (a < b) {
        mini = a;
    }
    else  {
        mini = b;
    }
    return mini;
};

let minny = mini(x, y);

console.log("x: " + x + ", y: " + y + " minimum is " + minny);
return 0;