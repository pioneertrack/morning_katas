class Calculator
	attr_accessor :optional_array

	def initialize(data=[])
		@optional_array = data
	end

	# output the sum of numbers for a multi-dimensional array
	def sum_numbers(arr=[])
		check_argument(arr)
		sum = 0
		arr.each do |val|
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

	# output the unique values in an array
	def uniques(arr=[])
		check_argument(arr)
		uniques = []
		arr.each do |val|
			exists = false
			uniques.each do |unique|
				exists = true if unique == val
			end
			uniques << val if exists == false
		end

		return uniques
	end

	# get max profit from 1 purchase and 1 sale of 1 stock yesterday
	def get_max_profit(stock_prices_yesterday=[])
		max_profit = stock_prices_yesterday[1] - stock_prices_yesterday[0]
		min_price = stock_prices_yesterday[0]

		stock_prices_yesterday.each_with_index do |current_price, index|
			# must skip time 0 bc we can't buy and sell at same price
			next if index == 0

			potential_profit = current_price - min_price

			max_profit = [potential_profit, max_profit].max

			min_price = [current_price, min_price].min
		end
		return max_profit
	end

	private

	def check_argument(input)
		raise ArgumentError, 'Argument is not an array' unless input.is_a? Array
	end
end