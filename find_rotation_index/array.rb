
require 'byebug'
class Array

  # split array in two
  # compare mid with mid-1
  # recursively call with start and stops based on midpoint

  def find_rotation_index_recursive_binary_search(start=nil, stop=nil)
    if start == nil
      start = 0
      stop = length-1
    end
    
    mid = (start+stop)/2

    if mid > 0 && self[mid-1][0] > self[mid][0]
      return mid
    end
    find_rotation_index_recursive_binary_search(start, mid-1)
    find_rotation_index_recursive_binary_search(mid + 1, stop)
  end

  def find_rotation_index_iterative_binary_search # => [1,2,[3],5,6] 4/2 = 2
    start = 0
    stop = length-1

    while start <= stop
      mid = (start+stop)/2
      if mid > 0 && self[mid-1][0] > self[mid][0]
        return mid
      elsif self[mid-1][0] < self[mid][0]
        start = mid + 1
      else
        puts "HERE"
        stop = mid - 1
      end
    end
  end
end


