import PriorityQueue from "../util/priority_queue";

test("Test PriorityQueue Push and Pop", () => {
	const queue = new PriorityQueue();

	queue.push(3, "three");
	queue.push(5, "five");
	queue.push(4, "four");
	queue.push(1, "one");
	queue.push(2, "two");

	expect(queue.pop()).toBe("one");
	expect(queue.pop()).toBe("two");
	expect(queue.pop()).toBe("three");
	expect(queue.pop()).toBe("four");
	expect(queue.pop()).toBe("five");
	expect(queue.pop()).toBeNull();
});
