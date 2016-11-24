# input: two sorted arrays
# output: one sorted array

# var myArray     = [3, 4, 6, 10, 11, 15];
# var alicesArray = [1, 5, 8, 12, 14, 19];

# console.log(mergeArrays(myArray, alicesArray));
# // logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
require 'byebug'

class Merger
  attr_accessor :arrays


  def initialize(arrays=[[]])
    @arrays = arrays
  end

  def merge_arrays(arr1=[], arr2=[])

    return arr1+arr2 if arr1.length == 0 || arr2.length == 0

    merged_array = []
    output_length = arr1.length + arr2.length

    current_index_merged = 0
    current_index_arr1 = 0
    current_index_arr2 = 0

    while current_index_merged < output_length
      if current_index_arr1 == arr1.length # we've gone through all items in arr1; add the rest of arr2 to merged
        return merged_array + arr2[current_index_arr2...arr2.length]
      elsif current_index_arr2 == arr2.length # we've gone through all items in arr2; add the rest of arr1 to merged
        return merged_array + arr1[current_index_arr1...arr1.length]
      elsif arr1[current_index_arr1] < arr2[current_index_arr2]
        merged_array[current_index_merged] = arr1[current_index_arr1]
        current_index_arr1 += 1
      else
        merged_array[current_index_merged] = arr2[current_index_arr2]
        current_index_arr2 += 1
      end
      current_index_merged += 1
    end
    merged_array
  end
end