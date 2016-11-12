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

	trueQuickSort(int_array, left, right){
		console.log("ARRAY" + int_array + "," + "LEFT" + left + "," + "RIGHT" + right);
		let partitionIndex;
		let rand = Math.random(int_array.length);
		let pivot = int_array[rand];

		console.log("PIVOT" + pivot);


		if (left < right) { // base case, if left is not less than right we've nothing left to partition
      partitionIndex = left;
			for (var i = left; i < right; i++) {
				// swap els in array if less than pivot
				if (int_array[i] < pivot) {
					this.swap(int_array, i, partitionIndex);
					partitionIndex ++ // increment pivot only if we swap
				}
			}

			this.swap(int_array, rand, partitionIndex) // last make sure we put pivot is in the right position
			//sort left and right
			this.trueQuickSort(int_array, left, partitionIndex - 1);
			this.trueQuickSort(int_array, partitionIndex + 1, right);
		}
		return int_array;
	}

	swap(array, i, j) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}  
}

