
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

  def find_rotation_index_recursive_binary_search(start=0, stop=nil)
    stop = length-1 if stop.nil?

    # base case array not rotated
    #a, b, c, d, e
    #e, a, b, c, e
    return start if self[start][0] < self[stop][0]

    # base case no more spots to check
    return start if start == stop

    mid = start+(stop-start)/2
    previous = self[mid-1][0]
    __next = self[mid+1][0]

    if self[mid][0] <= previous && self[mid][0] <= __next # pivot will be less than previous, less than next
      return mid
    elsif self[mid][0] < self[stop][0] # right part of array is sorted, pivot point must be to left 
      find_rotation_index_recursive_binary_search(start, mid-1)
    else
      find_rotation_index_recursive_binary_search(mid+1, stop)
    end
  end

  def find_rotation_index_iterative_binary_search(start=0, stop=nil)
    stop = length-1 if stop.nil?

    while start <= stop
      # base case array not rotated
      return start if self[start][0] < self[stop][0]

      # base case no more spots to check
      return start if start == stop

      mid = start+(stop-start)/2
      previous = self[mid-1][0]
      __next = self[mid+1][0]

      if self[mid][0] <= previous && self[mid][0] <= __next # pivot will be less than previous, less than next
        return mid
      elsif self[mid][0] < self[stop][0] # right part of array is sorted, pivot point must be to left
        stop = mid-1
      else
        start = mid + 1
      end
    end
  end
end


