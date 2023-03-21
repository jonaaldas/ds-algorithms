// A linked list is a way of organizing data (like numbers or words) by connecting each piece of data to the next one using a pointer. It's like making a chain of links where each link points to the next one. This makes it easy to add or remove data from the list without having to move everything else around.
//

// operations
// Insertion: Adding a new node to the list.
// Deletion: Removing a node from the list.
// Traversal: Visiting each node in the list to perform some operation.
// Searching: Finding a specific node in the list.
// Updating: Changing the data stored in a node.

// @ts-nocheck
// @ts-ignore
class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// inserFirst
	insertFirst(value) {
		let oldHead = this.head;
		this.head = new Node(value, oldHead);
		this.size++;
	}
	// insertLast
	insertLast(value) {
		let node = new Node(value);
		let current;

		// If empty, make head
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
	// insertAt
	insertAt(value, index) {
		let current = this.head;
		let node = new Node(value);
		let prev;
		let count = 0;

		while (count < index) {
			prev = current;
			count++;
			current = current.next;
		}
		node.next = current;
		prev.next = node;
		this.size++;
	}
	// getAt
	getAt(index) {
		let current = this.head;
		let count = 0;
		while (current) {
			if (count == index) {
				console.log(current.data);
				return;
			}
			current = current.next;
			count++;
		}
	}
	// removeAtIndex
	removeAt(index) {
		let current = this.head;
		let prev;
		let count = 0;
		while (count < index) {
			prev = current;
			current = current.next;
			count++;
		}
		prev.next = current.next;
		this.size--;
	}
	// clearList
	clearList() {
		this.head = null;
		this.size = 0;
	}
	// printListData
	printListData() {
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertLast(400);
ll.insertAt(500, 2);
// ll.getAt(2);
// ll.clearList();
ll.removeAt(2);
ll.printListData();
console.log(ll);
