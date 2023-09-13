export class Pastrie {
    id: string;
    ref: string;
    name: string;
    description: string;
    quantity: number;
    order: number;
    url?: string;
    tags?: string[];
    like?: string;

    constructor() {
        this.id = '';
        this.ref = '';
        this.name = '';
        this.description = '';
        this.quantity = 0;
        this.order = 0;
    }
}