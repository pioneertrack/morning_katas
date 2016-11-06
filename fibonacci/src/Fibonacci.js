// Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
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

function fib_by_iteration(nth) {
	let a = 0, b = 1, fib = 1;
	for(var i = 2; i <= nth; i++) {
		fib = a + b;
		a = b;
		b = fib;
	}
	return fib;
}

//0, 1, 1, 2, 3,
function fib_by_recursion(nn) {
	if (nn <= 1) {
		return nn;
	} else { 
		return fib_by_recursion(nn-1) + fib_by_recursion(nn-2);
	}
}

console.log(fib_by_iteration(7));
console.log(fib_by_recursion(7));