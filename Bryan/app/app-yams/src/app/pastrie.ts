export class Pastrie {
    id!: string;
    ref: string;
    name: string;
    description: string;
    quantity: number;
    order: number;
    url?: string;
    tags?: string[];
    like?: string;

    constructor(
        ref: string,
        name: string,
        description: string,
        quantity: number,
        order: number,
        url: string|undefined,
        tags: string[]|undefined,
        like: string|undefined
    ) {
        this.ref = ref;
        this.name  = name;
        this.description = description;
        this.quantity = quantity;
        this.order = order;
        this.url = url;
        this.tags = tags;
        this.like = like;
    }

}

export class List {
    id!: string;
    list!: string[];
}