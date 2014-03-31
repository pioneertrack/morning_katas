require 'debugger'

class Parser

  attr_reader :num

  def initialize num
    @num = num
  end

  def factorial
    num = self.num
    return 1 if num == 0
    current = num
    (num-1).times do
      current *= num-=1
    end
    current
  end

  def find_max_k
    current = 5
    i = 1
    while current < self.num
      current**=i
      i+=1
    end
    i-2
  end

  def calculate_trailing_zeros
    num = self.num
    current = 0
    i = find_max_k
    return 0 if num == 0
    return num / 5 if find_max_k < 2
    find_max_k.times do
      current += num / 5**(i)
      i-=1
    end
    current
  end


  def count_trailing_zeros
    self.factorial.to_s.match(/(0*)$/)
    $1.nil? ? 0 : $1.length 
  end

end


# Test Passed: Value == 0
# Test Failed: Expected: 1, instead got: 0
# Test Passed: Value == 7
# Test Passed: Value == 24
# Test Passed: Value == 249