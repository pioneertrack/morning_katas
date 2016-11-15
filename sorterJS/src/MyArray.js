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
	
	swap (arr, i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}

	inplaceQuickSort (arr, left, right) {
		let partitionIndex;

		// iterate over array and move elements less than pivot to left of pivot index
		if (left < right) { // base case - we've sorted everything if left index is greater or = to right index
			partitionIndex = left;
			let pivot = left + Math.ceil((right - left) * 0.5);
			let pivotValue = arr[pivot];

			for (var i = left; i < right; i++) {
				if (arr[i] < pivotValue) {
					this.swap(arr, i, partitionIndex);
					partitionIndex++;
				}
			}
			this.swap(arr, pivot, partitionIndex); // swap pivot and partionindex so pivot is immediate right of lesser vals

			this.inplaceQuickSort(arr, left, partitionIndex - 1);
			this.inplaceQuickSort(arr, partitionIndex + 1, right);
		}
		return arr;
	}
}


