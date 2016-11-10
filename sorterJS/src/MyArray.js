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

}