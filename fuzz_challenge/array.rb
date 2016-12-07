class Array

  def increment_number_array_by_while_loop
    # increment num array in reverse
    i = self.length-1
    while i >= 0
      if self[i] < 9
        self[i] += 1
        return self
      else
        self[i] = 0
        return self.unshift(1) if i == 0
      end

      i -= 1
    end
    self
  end

  def increment_number_array_by_for_loop
    for i in (self.length-1).downto(0)
      if self[i] < 9
        self[i] += 1
        return self
      else
        self[i] = 0
        return self.unshift(1) if i == 0
      end
    end
    self
  end

  def increment_number_array_by_recursion(i=self.length-1)
    #base case
    return self if i < 0
    if self[i] < 9
      self[i] += 1
      return self
    else
      self[i] = 0
      return self.unshift(1) if i == 0
    end
    increment_number_array_by_recursion(i-1)
  end
end