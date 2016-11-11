class MyArray {

	constructor(arr) {
		this.array = arr;
	}

	selectionSort(int_array) {
		for(var i=0; i < int_array.length; i++) {
			let min_index = i;
			for(var j=i+1; j < int_array.length; j++) {
				if (int_array[j] < int_array[min_index]) {
					min_index = j;
				}
			}
			// swap 'em
			let temp = int_array[i];
			int_array[i] = int_array[min_index];
			int_array[min_index] = temp;
		}
		return int_array;
	}

	quickSort(int_array) {
		if (int_array.length == 0) return [];
		let rand = Math.random(int_array.length);
		let pivot = int_array.splice(rand, 1); // returns element in array from array at rand index

		//partition
		let left = [];
		let right = [];
		for (var i=0; i<int_array.lenth; i++) {
			if (int_array[i] < int_array[pivot]) {
				left.push(int_array[i]);       
			} else {
				right.push(int_array[i]);
			}
		}
		this.quickSort(left).concat(pivot, this.quickSort(right));
	}   

}