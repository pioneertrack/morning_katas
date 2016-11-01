class Calculator
	attr_accessor :optional_array

	def initialize(data=[])
		@optional_array = data
	end

	# get the sum of numbers for a multi-dimensional array
	def sum_numbers(input_array=[])
		raise ArgumentError, 'Argument is not an array' unless input_array.class == Array
		sum = 0
		input_array.each do |val|
			if val.is_a? Fixnum
				sum += val
			elsif val.is_a? Array
				sum += sum_numbers(val)
			else
				sum += 0
			end
		end
		return sum
	end
end