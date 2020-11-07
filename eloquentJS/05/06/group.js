class Group {
    constructor() {
        this.group = Object.create(null);
    }
    has(member) {
        if (member in this.group) {
            return true;
        }
        else {
            return false;
        }
    }
    set(member):
        if (!this.group.has(member))   {
            member this.group;
        }
}