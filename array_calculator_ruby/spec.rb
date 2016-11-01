require './calculator.rb'

describe Calculator do
	describe '#initialize' do
		subject(:calculator) { Calculator.new([2, 4, 6]) }

		it 'should create a new Calculator subject' do
			calculator.is_a?(Calculator).should be true
		end

		it 'should respond to proper methods' do
			calculator.should respond_to(:optional_array)
		end
	end

	describe '#sum_numbers' do

		subject(:calculator) { Calculator.new }

		it 'should sum all the numbes in a multi-dimensional array' do
			data = [1, 3, 'g', [2, 4, ['g', 2, 4]], 2]
			expect(calculator.sum_numbers(data)).to eq(18)
		end

		it 'should raise an exception if an argument other than an array is passed in' do
			expect { calculator.sum_numbers('string') }.to raise_error(ArgumentError, 'Argument is not an array')
		end
	end
end
