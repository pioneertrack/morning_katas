class MyArray {
	
	incrementNumberArrayWhileLoop(arr) {
		let i = arr.length-1;
		while (i >= 0) {
			if (arr[i] < 9) {
				arr[i] += 1;
				return arr;
			} else if (i === 0) {
				arr[i] = 0;
				arr.unshift(1);
				return arr;
			} else {
				arr[i] = 0;
			}
			i--;
		}
		return arr;
	}
}