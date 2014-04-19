require 'debugger'

class Parser

  attr_reader :num

  def initialize num
    @num = num
  end

  def factorial #calculates self.num!
    num = self.num
    current = num
    return 1 if num == 0
    (num-1).times do
      current *= num-=1
    end
    current
  end

  def max_exponent #returns the max exponent of 5 that is less than self.num
    current = 0
    exponent = 0
    while current < self.num do 
      current = 5**exponent+=1 #5, 25, 125, 625
    end
    exponent-1
  end

  def calculate_trailing_zeros #calculates N!'s trailing zeros via multiples of 5
    num = self.num
    current = 0
    i = max_exponent
    return 0 if num == 0 #returns 0 for edge case where 0! = 1, i.e., no trailing zeros
    max_exponent.times do
      current += num / 5**(i) #calculates the the trailing zeros via dividing num by multiples of 5
      i-=1
    end
    current
  end

  def count_trailing_zeros #alternate solution calculates N!'s trailing zeros by literally counting them
    self.factorial.to_s.match(/(0*)$/)
    $1.nil? ? 0 : $1.length 
  end

end









