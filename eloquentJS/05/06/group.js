class Group {
    constructor() {
        this.members = [];
    }
    has(member) {
        if (this.members.includes(member)) {
            return true;
        }
        else {
            return false;
        }
    }
    add(member) {
        if (!(this.has(member))) {
            this.members.push(member);
        }
    }
    delete(member) {
        if (!(this.has(member))) {
            console.log(`Sorry, ${member} is not in the group.`);
        }
        else {
            let i = this.members.indexOf(member);
            this.members.splice(i, 1);
        }
    }
    from(interableObject) {
        for (var x of interableObject) {
            this.add(x);
        }
    }
}

let groupy = new Group;
groupy.add("foo");
console.log(groupy.has("foo"));
groupy.add("foo");
console.log(groupy.members);
groupy.delete("goo");
groupy.delete("foo");
console.log(groupy.has("foo"));
groupy.add("foo");
groupy.from(['blork', 5, "boop"]);
console.log(groupy.members);