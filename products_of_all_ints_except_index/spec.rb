require './calculator'

describe Calculator do

	subject(:calculator) { Calculator.new }

	describe '#initialize' do 
		it 'should create a new Calculator subject' do
      calculator.is_a?(Calculator).should be true
  	end

	  it 'should respond to proper methods' do 
	    calculator.should respond_to(:array)
	  end
	end

	describe '#products_of_all_ints_except_index_on1' do
		it "should return the product of all ints except at index" do
			expect(calculator.products_of_all_ints_except_index_on1([1, 2, 3, 1])).to eq([6, 3, 2, 6])
		end
	end

end
