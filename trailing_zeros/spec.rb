require './trailing_zeros.rb'

describe '#intialize' do 

  subject(:parser) { Parser.new(12) }

  it 'should create a new instance of the class Parser' do 
    parser.is_a?(Parser).should be_true
  end

  context "attribute" do

    it 'should have an attribute named num' do 
      parser.num.should be_true
    end

    it 'should respond to proper methods' do 
      parser.should respond_to(:num)
    end

    it 'should be an instance of Fixnum' do
      expect(parser.num.class).to be(Fixnum)
    end

  end

end

describe "#max_exponent" do

  it 'should calcalute the max exponent of 5 that is less than self.num' do
    parser = Parser.new(25)
    expect(parser.max_exponent).to eq(1)
  end

  it 'should calcalute the max exponent of 5 that is less than self.num' do
    parser = Parser.new(100)
    expect(parser.max_exponent).to eq(2)
  end

  it 'should calcalute the max exponent of 5 that is less than self.num' do
    parser = Parser.new(625)
    expect(parser.max_exponent).to eq(3)
  end

  it 'should calcalute the max exponent of 5 that is less than self.num' do
    parser = Parser.new(1000)
    expect(parser.max_exponent).to eq(4)
  end
end

describe '#calculate_trailing_zeros' do 

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(32)
    expect(parser.calculate_trailing_zeros).to eq(7)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(12)
    expect(parser.calculate_trailing_zeros).to eq(2)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(19)
    expect(parser.calculate_trailing_zeros).to eq(3)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(10)
    expect(parser.calculate_trailing_zeros).to eq(2)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(15)
    expect(parser.calculate_trailing_zeros).to eq(3)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(20)
    expect(parser.calculate_trailing_zeros).to eq(4)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(30)
    expect(parser.calculate_trailing_zeros).to eq(7)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(50)
    expect(parser.calculate_trailing_zeros).to eq(12)
  end

  it 'should calculate the number of trailing zeros of N!' do
    parser = Parser.new(100)
    expect(parser.calculate_trailing_zeros).to eq(24)
  end

end 