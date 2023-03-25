// A tree data structure is a type of data structure that is used to represent hierarchical relationships between elements. It is composed of nodes, which represent the elements, and edges, which represent the relationships between them. Each node may have zero or more child nodes, and there is always a unique root node that has no parent. Trees are commonly used to represent file systems, data structures, and in computer science algorithms.

// Breath-first search (BFS) is a graph traversal algorithm that explores all the vertices of a graph in breadth-first order. It starts at a specific vertex (the root) and visits all the vertices that are directly connected to it before moving on to the next level of vertices.

// BFS uses a queue data structure to keep track of the vertices that have been visited but not explored yet. When a vertex is visited, it is added to the queue, and its adjacent vertices are added to the queue as well. The algorithm then dequeues the next vertex from the queue and repeats the process until all the vertices have been visited.

// BFS can be used to find the shortest path between two vertices in an unweighted graph because it explores all the vertices in increasing order of their distance from the starting vertex. However, BFS is not suitable for graphs with a large number of edges because it requires a lot of memory to store the queue.

// node

class Node {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}

	findMin() {
		let current = this;
		while (current.left) {
			current = current.left;
		}
		return current.data;
	}

	insert(value) {
		if (this.data === value) {
			throw new Error('This element alreay exist within in the tree');
		} else if (this.data > value) {
			if (this.left) {
				this.left.insert(value);
			} else {
				this.left = new Node(value);
			}
		} else {
			if (this.right) {
				this.right.insert(value);
			} else {
				this.right = new Node(value);
			}
		}
	}

	// three cases to consider before deleting
	// 1 what happend is the node has no childern?
	// 2 what happens if the node we are trying to delete has one child?
	// 3 what happens if the node we are trying to delete has two children?
	delete(data) {
		if (data < this.data && this.left) {
			this.left = this.left.delete(data);
		} else if (data > this.data && this.right) {
			this.right = this.right.delete(data);
		} else {
			if (this.data == data) {
				if (this.right && this.left) {
					let minVal = this.right.findMin();
					this.data = minVal;
					this.right = this.right.delete(minVal);
				} else if (this.left) {
					return this.left;
				} else if (this.right) {
					return this.right;
				} else {
					return null;
				}
			}
		}
		return this;
	}

	find(data) {
		if (this.data == data) {
			return true;
		} else if (data < this.data && this.left != null) {
			return this.left.find(data);
		} else if (data > this.data && this.right != null) {
			return this.right.find(data);
		} else {
			return false;
		}
	}

	// inorder;
	inorder(currentNode) {
		if (currentNode) {
			this.inorder(currentNode.left);
			console.log(currentNode.data);
			this.inorder(currentNode.right);
		}
	}

	// preorder;
	preorder(currentNode) {
		if (currentNode) {
			console.log(currentNode.data);
			this.preorder(currentNode.left);
			this.preorder(currentNode.right);
		}
	}

	// postorder;
	postorder(currentNode) {
		if (currentNode) {
			this.postorder(currentNode.left);
			this.postorder(currentNode.right);
			console.log(currentNode.data);
		}
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	// insertion
	insert(data) {
		if (this.root) this.root.insert(data);
		else this.root = new Node(data);
	}
	// deletion
	delete(data) {
		this.root = this.root.delete(data);
	}

	// find
	find(data) {
		if (this.root) return this.root.find(data);
		return false;
	}

	//In-order traversal: In in-order traversal, we visit the left subtree first, followed by the root node, and then the right subtree. The steps involved in in-order traversal are:

	// a. Recursively traverse the left subtree.
	// b. Visit the root node.
	// c. Recursively traverse the right subtree.

	// In-order traversal is often used to sort a binary search tree or to print the nodes of the tree in ascending order.
	inorder() {
		if (this.root) this.root.inorder(this.root);
	}

	// Pre-order traversal: In pre-order traversal, we visit the root node first, followed by the left subtree and then the right subtree. The steps involved in pre-order traversal are:
	// a. Visit the root node.
	// b. Recursively traverse the left subtree.
	// c. Recursively traverse the right subtree.

	// Pre-order traversal is often used to create a copy of the tree or to evaluate an expression in prefix notation.
	preorder() {
		if (this.root) this.root.preorder(this.root);
	}

	//   Post-order traversal: In post-order traversal, we visit the left subtree first, followed by the right subtree and then the root node. The steps involved in post-order traversal are:
	// a. Recursively traverse the left subtree.
	// b. Recursively traverse the right subtree.
	// c. Visit the root node.

	// Post-order traversal is often used to delete the tree or to evaluate an expression in postfix notation.
	postorder() {
		if (this.root) this.root.postorder(this.root);
	}
}

const bst = new BST();

bst.insert(50);
bst.insert(25);
bst.insert(75);
bst.insert(15);
// bst.find(15);
// bst.insert(35);
// bst.insert(65);
// bst.insert(85);
// bst.insert(10);
// bst.insert(18);
// bst.insert(40);
// bst.insert(60);
// bst.insert(70);
// bst.insert(98);
// bst.insert(83);

console.log('🚀 ~ file: tree.js:53 ~ bst:', bst);
