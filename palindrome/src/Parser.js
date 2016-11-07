// function palindrome(string) {
//   var current = "";
//   var original = string.replace(/\W/g, '').toLowerCase();
//   var letterArray = string.replace(/\W/g, '').split('');
//   var i = 0;
//   while (i < letterArray.length) {
//     current = current.concat(letterArray.pop().toLowerCase());
//   }
//   return current == original ? true : false;
// }

//Notes
// 1. replace non-word chars and whitespace with no space
// 2. split string by no space (i.e., by character) into letter array; must be a letter array to pop off individual letters
// 3. iterate over letter array, pop last element off array and concatenate with current
// 4. compare current with original


// redivider
// noon
// civic

class Parser {
	
	constructor(string) {
		this.string = string;
		this.stripped = false
	}

	palindrome_via_iteration(string) {
		let strippedString = string.replace(/\W/g, "").toLowerCase();
		let reverse = "";
		for (var i = strippedString.length - 1; i >= 0; i--) {
			reverse += strippedString[i];
		}
		if (reverse == strippedString) return true;
		return false;
	}

	palindrome_via_recursion(string) {
		if (this.stripped === false) { // only strip the string once
			string = string.replace(/\W/g, "").toLowerCase();
			this.stripped = true;
		}
		// base_case - empty string or one character is always a palindrome
		if (string.length === 1 || string.length === 0) return true;
		// recursive case - make sure first and last characters match for each substring
		// if the base case return true it's a palindrome
		return string[0] === string.slice(-1) && this.palindrome_via_recursion(string.slice(1, -1));
	}
}






























