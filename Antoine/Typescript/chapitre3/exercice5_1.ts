class Queue<T> {
    protected queue: T[];

    constructor() {
        this.queue = [];
    }

    push(element: T) {
        this.queue.push(element)
    }

    pop(): T {
        return this.queue[0]
    }
}





let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

console.log(queue.pop()) // affiche 1

let queueArray = new Queue<number[]>();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

console.log(queueArray.pop()); // affiche [1,2]