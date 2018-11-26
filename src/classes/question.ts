import {Item} from "./item"
import {IIdentifiable, Id} from "../interfaces/iidentifiable";

export class Question extends Item implements IIdentifiable {
    readonly id: number;

    constructor(active: boolean, name: string) {
        super(active, name);
        this.id = Id.NextId();
    }

    toString(): string {
        return `Question ${this.id}) ${this.name}`;
    }
}