const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) {
            throw new Error("Locked!");
        } else {
            return this._content;
        }
    }
};

// my code
function withBoxUnlocked(body) {
    try {
        if (Math.random() < .5) {
            box.unlock();
        } else {
            box.lock();
        }
        console.log("box locked?: " + box.locked);
        body();
        box.lock();
    } catch (e) {
            console.log("Sorry, the box is locked.");
    } finally {
        box.lock();
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});

// try {
//     withBoxUnlocked(function () {
//         throw new Error("Pirates on the horizon! Abort!");
//     });
// } catch (e) {
//     console.log("Error raised: " + e);
// }

console.log(box.locked);
// → true