// QuickSort works by selecting a pivot element from the array, then partitioning the array into two sub-arrays based on whether each element is less than or greater than the pivot. This process is repeated recursively on each sub-array until the entire array is sorted. In JavaScript, QuickSort can be implemented using a function that takes an array as input and returns a sorted array as output.
// divide and conquer
let array = [12, 3, 5, 6, 10, 48, 1, 0];

function qs(arr) {
	// base case
	if (arr.length === 0) {
		return arr;
	}
	const [pivot, ...rest] = arr;
	const left = [],
		right = [];

	rest.forEach((el) => (el > pivot ? right.push(el) : left.push(el)));

	return [...qs(left), pivot, ...qs(right)];
}

console.log(qs(array));
