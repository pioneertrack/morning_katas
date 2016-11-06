require './calculator'

describe Calculator do

	subject(:calculator) { Calculator.new }

	describe '#initialize' do 
		it 'should create a new Calculator subject' do
      calculator.is_a?(Calculator).should be true
  	end

	  it 'should respond to proper methods' do 
	    calculator.should respond_to(:int_array)
	  end
	end

	describe '#products_of_all_ints_except_index_on1' do
		it "should return the product of all ints except at index" do
			expect(calculator.products_of_all_ints_except_index_on1([1, 2, 3, 1])).to eq([6, 3, 2, 6])
		end

		context "edge cases" do
			it "should handle empty array input" do
				expect(calculator.products_of_all_ints_except_index_on1([])).to eq([])
			end

			it "should handle an array with one element" do
				expect(calculator.products_of_all_ints_except_index_on1([5])).to eq([1])
			end

			it "should handle an array with zeros" do
				expect(calculator.products_of_all_ints_except_index_on1([0, 2, 4, 6])).to eq([48, 0, 0, 0])
			end
		end
	end

end
