export default class PriorityQueue {
    constructor() {
        this.q = [];
    }

    push (v) {
        const n = this.q.length;
        this.q.push(v);

        while (n != 0) {
            const i = (n - 1) / 2;
            if (this.q[n] < this.q[i]) {
                this.q[n], this.q[i] = this.q[i], this.q[n];
            }
            n = i;
        }
    }

    pop() {
        const n  = this.q.length - 1;
        this.q[0] = this.q[n];

        const v = this.q.pop();

        for (let i = 0, j = 0; (j = 2 * i  + 1) < n;) {
            if ((j != n - 1) && (this.q[j] < this.q[j + 1])) {
                j++;
            }
            if (this.q[i] < this.q[j]) {
                this.q[j], this.q[i] = this.q[i], this.q[j];
            }
            i = j;
        }

        return v;
    }

}

export class Node {
    constructor(value) {
        this.value = value;
        this.amount = 1;
        this.left = null;
        this.right = null;
    }
}