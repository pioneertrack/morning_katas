// Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.
// Let's say our fibonacci series is 0-indexed and starts with 0.

// The Fibonacci series is a numerical series where each item is the sum of the two previous items. 
// It starts off like this:

// 0,1,1,2,3,5,8,13,21...

// fib(0); // => 0
// fib(1); // => 1
// fib(2); // => 1
// fib(3); // => 2
// fib(4); // => 3
// fib(5); // => 5
// fib(6); // => 8

function fib (nn) {
  if (nn === 0) {
    return nn;
  } else if (nn == 1) {
    return nn;
  } else { 
    return fib(nn-1) + fib(nn-2);
  }
}

console.log(fib(7));