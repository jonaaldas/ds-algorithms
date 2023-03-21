// A queue is a type of data structure that works like a line of people waiting for something. You add things (like numbers or messages) to the back of the line, and they come out of the front of the line in the order they were added. This is called "first in, first out" (FIFO) order. Think of it like waiting in line at a store or a theme park ride.

// operations
// Enqueue: Adding an item to the back of the queue.
// Dequeue: Removing the item at the front of the queue.
// Peek: Looking at the item at the front of the queue without 			removing it.
// Size: Counting the number of items in the queue.
// IsEmpty: Checking if the queue is empty.

// link list

class NodeValue {
	constructor(value, next = null) {
		this.head = value;
		this.next = next;
	}
}

class queueLinkList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	enqueue(val) {
		let node = new NodeValue(val);
		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
			this.size++;
		}
	}

	dequeue() {
		let next = this.head.next;
		this.head = next;
	}
}

let ll = new queueLinkList();
ll.enqueue(12);
ll.enqueue(13);
ll.enqueue(14);
ll.enqueue(15);
ll.enqueue(16);
ll.dequeue();
ll.dequeue();
ll.dequeue();
console.log(ll);

// implementing with an array without using array methods
// class Queue {
// 	constructor() {
// 		this.queue = [];
// 		this.fistIndex = this.queue[0];
// 		this.lastIndex = this.queue[this.queue.length - 1];
// 	}

// 	enqueue(value) {
// 		// this.queue[this.lastIndex] = value;
// 		console.log(this.lastIndex);
// 		console.log(this.fistIndex);
// 	}
// }

// let q = new Queue();
// q.enqueue(12);
// q.enqueue(13);
// console.log(q);
