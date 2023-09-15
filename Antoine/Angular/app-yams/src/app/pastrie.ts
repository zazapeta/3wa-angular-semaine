export class Pastrie {
    id!: string;
    ref!: string;
    name!: string;
    description!: string;
    quantity!: number;
    order!: number;
    url?: string;
    tags?: string[];
    like?: string;
    choise!: boolean;

    constructor() {
    }
}
