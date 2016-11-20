require 'byebug'
class Array

  attr_reader :input
	
	def initialize(input=[])
		@input = input
	end


	def selection_sort
    #[3,2,1]
    puts "INT ARRAY #{self}"
    for outer_index in (0...self.length) #3
      min_index = outer_index
      for inner_index in (outer_index+1...self.length)# 2
        puts "if #{self[inner_index]} is less than #{self[min_index]} new min = #{inner_index}"
        if self[inner_index] < self[min_index]
          min_index = inner_index
        end
      end
      self[outer_index], self[min_index] = self[min_index], self[outer_index]
    end
    self
	end

  # Search a sorted array in O(lg(n)) time
  # by opening up class array we can just call the method on an array
  def quick_sort
    return [] if self.empty?
    # extract pivot
    pivot = delete_at(rand(size))

    # partition left and right of pivot
    left, right = partition(&pivot.method(:>))
    puts "LEFT #{left} PIVOT #{pivot} RIGHT #{right}"

    # use splat to return a list
    return *left.quick_sort, pivot, *right.quick_sort
  end

  def in_place_quick_sort(left, right)
    # base case
    if (left < right) # if this is false we've sorted the array
      partition_index = left
      pivot = rand(left..right)
      pivot_value = self[pivot]
      self[pivot], self[right] = self[right], self[pivot]
      # iterate over array; compare val to pivot val and swap with partitionIndex if less than pivot
      for i in (left...right)
        if self[i] < pivot_value
          self[i], self[partition_index] = self[partition_index], self[i]
          partition_index += 1
        end
      end
      # make sure pivot is just to the right (partition index) of the items we moved
      self[pivot], self[right] = self[right], self[pivot]

      in_place_quick_sort(left, partition_index - 1)
      in_place_quick_sort(partition_index + 1, right)
    end
    return self
  end
end