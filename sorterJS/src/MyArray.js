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
		if (int_array.length <= 1) return int_array; // base case - it's sorted if array is empty or only 1 value
		let rand = Math.floor(Math.random() * (int_array.length - 1));

		let pivot = (int_array.splice(rand, 1)); // returns element in array from array at rand index

		//partition
		let left = [];
		let right = [];
		for (var i=0; i<int_array.length; i++) {
			if (int_array[i] <= pivot) {
				left.push(int_array[i]);       
			} else {
				right.push(int_array[i]);
			}
		}
		return this.quickSort(left).concat(pivot, this.quickSort(right));
	}

	trueQuickSort(int_array, left, right) {
		let partitionIndex;

		if (left < right) { // base case, if left is not less than right we've nothing left to partition
			partitionIndex = left;
			let pivot = left + Math.ceil((right - left) * 0.5);
			let pivotValue = int_array[pivot];

			for (var i = left; i < right; i++) {
				// swap els in array if less than pivot
				if (int_array[i] < pivotValue) {
					this.swap(int_array, i, partitionIndex);
					partitionIndex++; // increment partitionIndex only if we swap
				}
			}
			console.log("ARRAY " + int_array + " partition index " + partitionIndex + " PIVOT " + pivotValue);
			this.swap(int_array, pivot, partitionIndex); // last make sure pivot is to the right of all the lesser values
			//sort left and right
			this.trueQuickSort(int_array, left, partitionIndex - 1);
			this.trueQuickSort(int_array, partitionIndex + 1, right);
		}
		return int_array;
	}

	swap (array, i, j) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

	// trueQuickSort (int_array, left, right) {
	// 	let rand = Math.random(int_array.length)
	// 	let pivot = int_array[rand]
	// 	let partitionIndex;

	// 	// partition; move everything less than pivot to left
	// 	// increment partitionIndex
	// 	if (left < right) { // base case
	// 		partitionIndex = left;
	// 		for (var i = left; i < right; i++) {
	// 			if (int_array[i] < pivot) {
	// 				this.swap(int_array, i, rand)
	// 				partitionIndex++;
	// 			}
	// 		}
	// 		this.swap(int_array, rand, partitionIndex); // make sure pivot is in the rightmost position

	// 		trueQuickSort(int_array, left, partitionIndex - 1);
	// 		trueQuickSort(int_array, partitionIndex + 1, right);
	// 	}
	// }

	// swap (int_array, i, j) {
	// 	let temp = int_array[i];
	// 	int_array[i] = int_array[j];
	// 	int_array[j] = int_array[i];
	// }
//}


