require './trailing_zeros.rb'

describe '#intialize' do 

  subject(:parser) { Parser.new(12) }

  it 'should create a new instance of the class Parser' do 
    parser.is_a?(Parser).should be_true
  end

  it 'should have an attribute named num' do 
    parser.num.should be_true
  end

  it 'should respond to proper methods' do 
    parser.should respond_to(:num)
  end

  context "attribute" do

    it 'should be an instance of Fixnum' do
      expect(parser.num.class).to be(Fixnum)
    end

  end

end

describe '#zeros' do 

end

# Description:

# Write a program that will calculate the number of trailing zeros in a factorial of a given number.

# N! = 1 * 2 * 3 * 4 ... N

# zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600 
# that has 2 trailing zeros 4790016(00)

# Be careful 1000! has length of 2568 digital numbers.

# def zeros(n)
  
# end