class Calculator
	attr_accessor :optional_array

	def initialize(data=[])
		@optional_array = data
	end

	def sum_numbers(arr=[])
		check_argument(arr)
		sum = 0
		arr.each do |val|
			if val.is_a? Integer
				sum += val
			elsif val.is_a? Array
				sum += sum_numbers(val)
			else
				sum
			end
		end
		sum
	end


	def uniques(arr=[])
		check_argument(arr)
		uniques = []
		arr.each do |i|
			exists = false
			uniques.each do |j|
				exists = true if j == i
			end
			uniques << i if exists == false
		end
		uniques
	end


	def get_max_profit(stocks)
		min_price = stocks[0]
		max_profit = stocks[1] - stocks[0]

		stocks[1..-1].each_with_index do |stock|
			potential_profit = stock - min_price
			max_profit = [potential_profit, max_profit].max
			min_price = [stock, min_price].min
		end
		max_profit
	end

	private

	def check_argument(input)
		raise ArgumentError, 'Argument is not an array' unless input.is_a? Array
	end
end