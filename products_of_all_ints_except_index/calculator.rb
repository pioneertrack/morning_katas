class Calculator

	attr_reader :array

	def initialize(arr=[])
		@array = arr
	end

	# given [1, 7, 3, 4]
	# return   [84, 12, 28, 21]
	# by calculating   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
	# def products_of_all_ints_except_index_on2(arr=[])
	# 	products = []
	# 	# iterate over array
	# 	# calculate the products except index and shuffle in
	# 	#[1, 7, 3, 4]

	# 	arr.each_with_index do |outer_int, outer_index|
	# 		#[1, 7, 3, 4]
	# 		product = 1
	# 		arr.each_with_index do |inner_int, inner_index|
	# 			next if outer_index == inner_index
	# 			product *= inner_int
	# 		end
	# 		products << product
	# 	end
	# 	products
	# end
	
	def products_of_all_ints_except_index_on1(int_array=[])
		products_of_all_ints_except_index = []
		#[1, 7, 3, 4]
		product_so_far = 1
		for i in (0...int_array.length)
			products_of_all_ints_except_index[i] = product_so_far
			product_so_far *= int_array[i]
		end
		#puts products_of_all_ints_before_index

		product_so_far = 1
		j = int_array.length - 1
		while j >= 0
			products_of_all_ints_except_index[j] *= product_so_far
			product_so_far *= int_array[j]
			j -= 1
		end
		products_of_all_ints_except_index
	end
end

calculator = Calculator.new
calculator.products_of_all_ints_except_index_on1([1, 7, 3, 4])