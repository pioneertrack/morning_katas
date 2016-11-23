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
    merged_array = []

    output_length = arr1.length + arr2.length
    index = 0
    while index <= output_length
      if arr1.length == 0
        merged_array[index] = arr2.shift
        return merged_array
      elsif arr2.length == 0
        merged_array[index] = arr1.shift
      elsif arr1[0] < arr2[0]
        merged_array[index] = arr1.shift
      else
        merged_array[index] = arr2.shift
      end
      puts "MERGED #{merged_array}"

      index += 1
    end
    merged_array
  end
end