// Below are examples of both imperative and declarative solutions to code challenges

// imperative
// we describe how to do something
// we are mutating some state (e.g., variable dbl)
// to understand the code you sort of have to step through it with data

// declarative
// we are abstracting over some imperative solution with functional programming
// code is context indepenedent and reusable in other programs

// tells the program exactly how to get solution
function imperativeDouble(arr) {
	let dbl = [];
	for (var val of arr) {
		dbl.push(val * 2);
	}
	return dbl;
}

// tells the program what solution it wants
function declarativeDouble(arr) {
	return arr.map((val) => {
		return val * 2;
	});
}

function imperativeAdd(arr) {
	let sum = 0;
	for (var val of arr) {
		sum += val;
	}
	return sum;
}

function declarativeAdd(arr) {
	return arr.reduce((prev, current) => {
		console.log("Previous " + prev);
		console.log("Current " + current);
		return prev + current;
	});
}

function imperativeFilter(arr) {
	let filtered = [];
	for (var val of arr) {
		if (val >= 10) { filtered.push(val); }
	}
	return filtered;
}


function isBigEnough(val) {
	return val >= 10;
}

function declarativeFilter(arr) {
	return arr.filter(isBigEnough);
}

// jQuery btn click event (imperative)
// $("#btn").click(function() {
// 	$this = $(this);
// 	$this.toggleClass('highlight');
// 	if ($this.text === 'Add Highlight') {
// 		$this.text("Remove Highlight");
// 	} else {
// 		$this.text("Add Highlight");
// 	}
// });

// React btn component (declarative)
// <Btn onToggleHighlight={this.handleToggleHighlight} highlight={this.state.highlight}> 
//   {this.state.buttonText}
// </Btn>

console.log(imperativeDouble([1,2,3,4]));
console.log(declarativeDouble([1,2,3,4]));
console.log(imperativeAdd([1,2,3,4]));
console.log(declarativeAdd([1,2,3,4]));
console.log(imperativeFilter([1, 5, 10, 20, 3, 11]));
console.log(declarativeFilter([1, 5, 10, 20, 3, 11]));
