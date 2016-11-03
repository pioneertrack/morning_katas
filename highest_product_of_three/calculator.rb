class Calculator
	def initialize arr=[]
		@array = arr
	end

	# write function to get the highest product of three
 # [2, 3, 10, 1, 20]
	def highest_product_of_three(arr=[])
		highest_product_of_two = arr[0] * arr[1]
		lowest_product_of_two = arr[0] * arr[1]
		highest_product_of_three = 0

		arr.each_with_index do |current, index|
			next unless index > 1
			highest_product_of_three = [highest_product_of_three, 
																	highest_product_of_two*current, 
																	lowest_product_of_two*current].max

			highest_product_of_two = [highest_product_of_two, current * arr[index-1]].max
			lowest_product_of_two = [lowest_product_of_two, current * arr[index-1]].min
		end
		return highest_product_of_three
	end
end