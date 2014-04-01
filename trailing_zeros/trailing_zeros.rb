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

  def find_max_exponent #returns the exponent of 5 where 5**exponent is < self.num
    current = 0
    exponent = 0
    while current < self.num do #1000
      #debugger
      current = 5**exponent+=1 #5, 25, 125, 625
      exponent+=1 # 2, 3, 4, 5, 6
    end
    exponent-2 #subtract two to get the max exponent
  end

  def calculate_trailing_zeros
    num = self.num
    current = 0
    i = find_max_exponent
    return 0 if num == 0 #handles edge case where 0! = 1
    find_max_exponent.times do
      current += num / 5**(i) #calculates the multiplicity of the prime factor 5 in n!
      i-=1
    end
    current
  end

  def count_trailing_zeros
    self.factorial.to_s.match(/(0*)$/)
    $1.nil? ? 0 : $1.length 
  end

end









