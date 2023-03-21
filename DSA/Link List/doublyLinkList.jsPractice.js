class Node {
	constructor(value, prev, next) {
		this.value = value;
		this.next = next || null;
		this.prev = prev || null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertFirst(value){
		let oldHead = this.head
		this.head = new Node(value, oldHead)
	}
}

let ll = new LinkedList()
ll.insertFirst(12)
console.log(ll)