class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(j, k) {
        return new Vec(this.x + j, this.y + k);
    }
    minus(j, k)   {
        return new Vec(this.x - j, this.y - k);
    }
}

let vec = new Vec(3, 4);
sum = vec.plus(6, 8);
dif = vec.minus(1, 1);
console.log("sum: " + sum);
console.log("dif: " + dif);
