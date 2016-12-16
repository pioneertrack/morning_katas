
require 'byebug'
class Array

  # split array in two
  # compare mid with mid-1
  # recursively call with start and stops based on midpoint

  def find_rotation_index(start, stop)
    mid = start+stop/2
    puts "MID MINUS 1 #{self[mid-1]}"
    puts "MID #{self[mid]}"
    if self[mid-1][0] > self[mid][0]
      return mid
    end
    find_rotation_index(start, mid-1)
    find_rotation_index(mid + 1, stop)
  end
end


