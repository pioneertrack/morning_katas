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
			input = [1, 3, 'g', [2, 4, ['g', 2, 4]], 2]
			expect(calculator.sum_numbers(input)).to eq(18)
		end

		it 'should raise an exception if an argument other than an array is passed in' do
			expect { calculator.sum_numbers('string') }.to raise_error(ArgumentError, 'Argument is not an array')
		end
	end

	describe '#uniqes' do

		subject(:calculator) { Calculator.new }
		
		it 'should get the unique values in an array' do
			input = ['rabbit', 'dog', 'cat', 'rabbit', 'rabbit', 'dog', 'cat']
			expect(calculator.uniques(input)).to eq(['rabbit', 'dog', 'cat'])
		end

		it 'should get the unique values in an array' do
			input = [0, 2, 2, 4, 5, 4, 5, 0]
			expect(calculator.uniques(input)).to eq([0, 2, 4, 5])
		end

		it 'should raise an exception if an argument other than an array is passed in' do
			expect { calculator.uniques('string') }.to raise_error(ArgumentError, 'Argument is not an array')
		end
	end

	describe '#get_max_profit' do

		subject(:calculator) { Calculator.new }

		it 'should return the max profit from 1 purchase and 1 sale of 1 stock yesterday' do
			input = [10, 4, 3, 20]
			expect(calculator.get_max_profit(input)).to eq(17)
		end

		# edge case when price goes all the way down
		it 'should return the max profit from 1 purchase and 1 sale of 1 stock yesterday' do
			input = [10, 8, 6, 3, 1]
			expect(calculator.get_max_profit(input)).to eq(-2)
		end
	end
end
