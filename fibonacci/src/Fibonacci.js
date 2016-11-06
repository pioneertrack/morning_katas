// Write a function fib() that a takes an integer index_of_sequence and returns the nindex_of_sequence fibonacci ↴ number.
// Let's say our fibonacci series is 0-indexed and starts with 0.

// The Fibonacci series is a numerical series where each item is the sum of the two previous items. 
// It starts off like this:

// 0,1,1,,23,5,8,13,21...

// fib(0); // => 0
// fib(1); // => 1
// fib(2); // => 1
// fib(3); // => 2
// fib(4); // => 3
// fib(5); // => 5
// fib(6); // => 8


// 0 1 1 2 3 5 8 13 21 34

function fib_by_iteration(index_of_sequence) {
	let a = 0, b = 1, fib = 1;
	for(var i = 2; i <= index_of_sequence; i++) {
		// pushing values up 
		current_val_of_sequence = a + b;
		a = b; // a is replace with b
		b = current_val_of_sequence; // b is replaced with current index val of sequence
	}
	return fib;
}

//0, 1, 1, 2, 3,
function fib_by_recursion(index_of_sequence) {
	if (index_of_sequence <= 1) {
		return index_of_sequence;
	} else { 
		return fib_by_recursion(index_of_sequence-1) + fib_by_recursion(index_of_sequence-2);
	}
}

console.log(fib_by_iteration(7));
console.log(fib_by_recursion(7));