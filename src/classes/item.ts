export class Item {
    constructor(public active: boolean, public name: string) { }

    toString() {
        return this.name;
    }
}