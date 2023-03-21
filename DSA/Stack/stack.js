// A stack is a type of data structure that works like a stack of plates. You can add plates (or items) to the top of the stack, and you can remove plates (or items) from the top of the stack. This is called "last in, first out" (LIFO) order. Think of it like a stack of books or papers on your desk, where you can only access the top one at a time.

// Push: Adding an item to the top of the stack.
// Pop: Removing the item from the top of the stack.
// Peek: Looking at the item at the top of the stack without removing it.
// Size: Counting the number of items in the stack.
// IsEmpty: Checking if the stack is empty.

// ~~~~~ <- top of the stack
// ~~~~~
// ~~~~~
// ~~~~~
// ~~~~~
// ~~~~~

class Stack {
	constructor() {
		this.stack = [];
		this.size = this.stack.length;
		this.maxSize = 10;
	}

	push(value) {
		if (this.size === this.maxSize) {
			return 'stack is full';
		}
		this.stack[this.size] = value;
		this.size++;
	}

	pop() {
		const element = this.stack[this.size - 1];
		this.stack.length = this.stack.length - 1;
		console.log(element);
		this.size--;
	}

	peek() {
		console.log(this.stack[this.size - 1]);
	}

	is_empty() {
		if (this.size == 0) console.log('its empty');
		else console.log('its not empty');
	}
}

// const stack = new Stack();

// stack.push(4);
// stack.push(3);
// stack.push(2);
// stack.push(10);
// stack.pop();
// stack.pop();
// stack.pop();
// stack.peek();
// stack.is_empty();
// console.log(stack);

class NodeElement {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}
class LinkListStack {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	push(value) {
		let node = new NodeElement(value);
		let current;

		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node;
		}

		this.size++;
	}

	pop() {
		if (!this.head) {
			return;
		} else {
			let current = this.head;
			let prev;
			while (current.next) {
				prev = current;
				current = current.next;
			}
			prev.next = null;
		}
		this.size--;
	}

	peek() {
		if (!this.head) {
			return;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			console.log(current.value);
		}
	}

	is_empty() {
		if (this.size == 0) {
			return 'is empty';
		} else {
			return 'is not empty';
		}
	}
}

let stackLl = new LinkListStack();
// stackLl.push(12);
// stackLl.push(13);
// stackLl.pop();
// stackLl.peek();
stackLl.is_empty();
console.log(stackLl);
