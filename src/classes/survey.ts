import { Item } from "./item"
import { IIdentifiable, Id } from "../interfaces/iidentifiable";
import { Question } from "./question";


export class Survey extends Item implements IIdentifiable {
    readonly id: number;
    questions: Question[];

    constructor(active: boolean, name: string) {
        super(active, name);

        this.id = Id.NextId();
        this.questions = [];        
    }

    addQuestion(question: Question) {
        this.questions.push(question);
    }

    toString(): string {
        return `Survey ${this.id}) ${this.name}`;
    }
}