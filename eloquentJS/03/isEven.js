
let x = parseInt(process.argv[2]);
x = Math.abs(x);
function isEven(a) {
    switch (a) {
        case 0:
            return "even";
        case 1: 
            return "odd";
            break;
        default:
            return (isEven(a - 2));
    }

    
};

let evenSteven = isEven(x);

console.log("x is " + evenSteven);
return 0;