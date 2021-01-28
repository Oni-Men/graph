import PriorityQueue from "../util/priority_queue";

test("Test PriorityQueue Push and Pop", () => {
	const queue = new PriorityQueue();

	queue.push(3, "three");
	queue.push(5, "five");
	queue.push(4, "four");
	queue.push(1, "one");
	queue.push(2, "two");

	expect(queue.pop().value).toBe("one");
	expect(queue.pop().value).toBe("two");
	expect(queue.pop().value).toBe("three");
	expect(queue.pop().value).toBe("four");
	expect(queue.pop().value).toBe("five");
	expect(queue.pop()).toBeNull();
});
