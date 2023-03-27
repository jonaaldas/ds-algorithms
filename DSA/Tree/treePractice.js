// @ts-nocheck
// implement a binary search from scratch
// findmin
// insert
// find
// inorder
//In-order traversal: In in-order traversal, we visit the left subtree first, followed by the root node, and then the right subtree. The steps involved in in-order traversal are:
// preorder
// Pre-order traversal: In pre-order traversal, we visit the root node first, followed by the left subtree and then the right subtree. The steps involved in pre-order traversal are:
// postorder
//   Post-order traversal: In post-order traversal, we visit the left subtree first, followed by the right subtree and then the root node. The steps involved in post-order traversal are:

// @ts-ignore
class Node {
	constructor(data) {
		this.value = data;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor(val) {
		this.root = new Node(val);
	}

	insert(value) {
		let newNode = new Node(value);

		const searchTree = (node) => {
			// if value < node.value, go left
			if (value < node.value) {
				// if no left child, append new node
				if (!node.left) {
					node.left = newNode;
				}
				// if left child, look left again
				else {
					searchTree(node.left);
				}
			}
			// if value > node.value, go right
			else if (value > node.value) {
				// if no right child, append new node
				if (!node.right) {
					node.right = newNode;
				}
				// if right child, look right again
				else {
					searchTree(node.right);
				}
			}
		};

		searchTree(this.root);
	}

	// TODO: Watch the Preamegon Video on recursion
	// REMEMBER: Always have a base case in recursion
	contains(val, node = this.root) {
		if (!node) {
			return false;
		}
		if (node.value === val) {
			console.log(node.value);
			return true;
		} else if (node.value > val) {
			return this.contains(val, node.left);
		} else {
			return this.contains(val, node.right);
		}
	}

	inorder(node = this.root) {
		if (!node) return;
		this.inorder(node.left);
		console.log(node.value);
		this.inorder(node.right);
	}

	preorder(node = this.root) {
		if (!node) return;
		console.log(node.value);
		this.preorder(node.left);
		this.preorder(node.right);
	}

	postorder(node = this.root) {
		if (!node) return;
		this.postorder(node.left);
		this.postorder(node.right);
		console.log(node.value);
	}

	findMin() {
		// console.log(this.root.left);
		let current = this.root;
		while (current.left) {
			current = current.left;
		}
		console.log(current);
	}

	findMax() {
		let current = this.root;
		while (current.right) {
			current = current.right;
		}
		console.log(current);
	}
}

let tree = new BST(30);
tree.insert(20);
tree.insert(5);
tree.insert(40);
tree.insert(1);
tree.contains(1);
// tree.findMin();
// tree.findMax();
console.log(tree);
