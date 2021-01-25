export default class PriorityQueue {
	constructor() {
		this.q = [];
	}

	push(priority, value) {
		let currendIndex = this.q.length;
		this.q.push({ priority, value });

		while (currendIndex != 0) {
			const parentIndex = Math.floor((currendIndex - 1) / 2);
			//最小ヒープなので、親の優先度と比較し小さい場合は入れ替える
			if (this.q[currendIndex].priority < this.q[parentIndex].priority) {
				this.swap(currendIndex, parentIndex);
			}
			currendIndex = parentIndex;
		}
	}

	pop() {
		const popped = this.q[0];
		this.q[0] = this.q[this.q.length - 1];
		this.q.pop();

		//最小ヒープ構造を維持するように調整
		this.heapify(0);

		return popped === undefined ? null : popped.value;
	}

	heapify(parent) {
		const left = parent * 2 + 1;
		const right = parent * 2 + 2;
		const length = this.q.length - 1;
		let smallest = parent;

		if (left <= length && this.q[parent].priority > this.q[left].priority) {
			smallest = left;
		}

		if (right <= length && this.q[smallest].priority > this.q[right].priority) {
			smallest = right;
		}

		if (smallest != parent) {
			this.swap(parent, smallest);
			this.heapify(smallest);
		}
	}

	swap(a, b) {
		const tmp = this.q[a];
		this.q[a] = this.q[b];
		this.q[b] = tmp;
	}

	isEmpty() {
		return this.q.length == 0;
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
