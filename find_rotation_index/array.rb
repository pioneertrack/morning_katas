
require 'byebug'
class Array

  # split array in two
  # compare mid with mid-1 & mid + 1
  # recursively call with low and high based on midpoint's value relative to last

  # 1, 2, 3, 4
  # 4, 1, 2, 3
  # 3, 4, 1, 2
  # 2, 3, 4, 1

  # 5, 1, 2, 3, 4
  # 4, 5, 1, 2, 3
  # 3, 4, 5, 1, 2
  # 2, 3, 4, 5, 1

  def find_rotation_index_recursive_binary_search(low=nil, high=nil)
    if low.nil?
      low = 0
      high = length-1
    end

    mid = (low + high)/ 2
    previous = self[mid-1][0]
    __next = self[mid+1][0]
    last = self[high][0]
    first = self[low][0]

    # array isn't rotated
    return low if first < last 

    # only one element is left
    return low if low == high 

    if self[mid][0] <= previous && self[mid][0] <= __next
      return mid
    elsif self[mid][0] < last # we know that the right part of array is sorted, pivot point must be to left
      find_rotation_index_recursive_binary_search(low, mid-1)
    else # pivot point must be to right
      find_rotation_index_recursive_binary_search(mid + 1, high)
    end
  end

  def find_rotation_index_iterative_binary_search # => [1,2,[3],5,6] 4/2 = 2
    low = 0
    high = length-1
    last = self[high][0]
    mid = low + (high-low)/2
    #[z, a, b]
    while low <= high
      #return low if self[low][0] <= self[high][0] #edge case
      if self[mid][0] >= last
        low = mid + 1
      elsif self[mid][0] <= last
        high = mid - 1
      else
        mid
      end
      mid = low + (high-low)/2
    end
    mid
  end
end


