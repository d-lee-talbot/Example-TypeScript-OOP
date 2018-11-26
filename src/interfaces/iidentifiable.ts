export interface IIdentifiable {
    readonly id: number;
}

export class Id {
    private static id = 0;

    static NextId(): number {
        return ++this.id;
    }
}