class Calculator {
	constructor(arr) {
		this.array = arr;
	}

	closestPairSumToZero(arr) {
		let closestPairToZero = [arr[0], arr[1]];
		let closestSum = Math.abs(closestPairToZero[0] + closestPairToZero[1]);
 
		for(var i=0; i < arr.length; i++) {	
			if (closestSum === 0) { break; }
			for(var j=0; j < i; j++) {
				let currentSum = Math.abs(arr[i] + arr[j]);				
				if (currentSum < closestSum) {
					closestPairToZero = [arr[i], arr[j]];
					closestSum = Math.abs(closestPairToZero[0] + closestPairToZero[1]);
				}
			}
		}
		return closestPairToZero;
	}

	allZeroSumPairs(arr) {
		let zeroSumPairs = [];
		for(var i=0; i < arr.length; i++) {	
			for(var j=0; j < i; j++) {
				if (Math.abs(arr[i] + arr[j]) === 0) {
					zeroSumPairs.push([arr[i], arr[j]]);
				}
			}
		}
		return zeroSumPairs;
	}

	OofNSolution(arr) {
		var found = {};
		var results = [];
		for(var i of arr) {
			console.log(i);
			if (found[-i] === true) {
				// pair found
				results.push([i, -i]);
			}
			found[i] = true;
		}
		return results;
	}

	pairSumsTo100 (arr) {
		let found = {};
		let results = [];
		arr.forEach(val => {
			if (found[Math.abs(Math.abs(val)-100)]) {
				results.push([val, Math.abs(Math.abs(val)-100)]);
			}
			found[val] = true;
		});
		return results;
	}

}