let dim = 8;
let board = "";
let switcher = 0;
for (let i = 0; i < dim; i++)   {
    for (let j = 0; j < dim; j++) {
        switch (switcher) {
            case 0:
                board += " ";
                switcher = 1;
                break;
            case 1:
                board += "#"
                switcher = 0;
        };
    };
    board += "\n";
    switch (switcher) {
        case 0:
            switcher = 1;
            break;
        case 1:
            switcher = 0;
    }
}
console.log(board);