class Array

  def binary_search(start, stop, item)
    return "Not Found" if start > stop

    mid = (start + stop)/2

    if item == self[mid] # item exists at midpoint
      return mid
    elsif item > self[mid]
      binary_search(mid + 1, stop, item) # search for item using mid + 1 as starting point
    else
      binary_search(start, mid - 1, item) # search for item using mid + 1 as stop point
    end
  end
end