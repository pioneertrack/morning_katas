class Merger {
	constructor(arr1, arr2) {
		this.arr1 = arr1;
		this.arr2 = arr2;
	}

	mergeSortedArrays(arr1, arr2) {
		let mergedArray = [];
		let length = arr1.length + arr2.length;
		let mergedIndex = 0;
		let arr1Index = 0;
		let arr2Index = 0;

		// empty array edge case
		if (arr1.length == 0 || arr2.length == 0) return arr1.concat(arr2);

		while (mergedIndex < length) {
			// we always finish one array before the other
			// concat the rest of the remaining array
			if (arr1Index >= arr1.length) return mergedArray.concat(arr2.slice(arr2Index, arr2.length));
			if (arr2Index >= arr2.length) return mergedArray.concat(arr1.slice(arr1Index, arr1.length));

			if (arr1[arr1Index] < arr2[arr2Index]) {
				mergedArray.push(arr1[arr1Index]);
				arr1Index++;
			} else {
				mergedArray.push(arr2[arr2Index]);
				arr2Index++;
			}
			mergedIndex++;
		}
		return mergedArray;
	}
}