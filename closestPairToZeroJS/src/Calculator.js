class Calculator {
	constructor(arr) {
		this.array = arr;
	}

	closestPairSumToZero(arr) {
		let closestPairToZero = [arr[0], arr[1]];
 
		for(var i=0; i < arr.length; i++) {
			for(var j=i+1; j < arr.length; j++) {
				let sumOfCurrentPair = Math.abs(arr[i] + arr[j]);
				if (sumOfCurrentPair == 0) return [arr[i], arr[j]]; // we can just return if we found a pair whose sum is zero
				let sumOfClosestPair = Math.abs(closestPairToZero[0] + closestPairToZero[1]);
				
				if (sumOfClosestPair > sumOfCurrentPair) {
					closestPairToZero = [arr[i], arr[j]];
				}
			}
		}
		return closestPairToZero;
	}
	
}