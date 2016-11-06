class Calculator

	attr_reader :int_array

	def initialize(int_array=[])
		@int_array = int_array
	end

	# given [1, 7, 3, 4]
	# return   [84, 12, 28, 21]
	# by calculating   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
	def products_of_all_ints_except_index_on2(int_arr=[])
		products = []
		# iterate over int_array
		# calculate the products except index and shuffle in
		#[1, 7, 3, 4]

		int_arr.each_with_index do |outer_int, outer_index|
			#[1, 7, 3, 4]
			product = 1
			int_arr.each_with_index do |inner_int, inner_index|
				next if outer_index == inner_index
				product *= inner_int
			end
			products << product
		end
		products
	end

	# solution in O(n) time
	# product of all ints except index can be broken into subproblems:
	# product of all ints before index
	# product of all ints after index
	def products_of_all_ints_except_index_on1(int_arr=[])
		raise ArgumentError, "Argument must be an Array" unless int_array.is_a? Array
		# save space by storing products for each index in one array
		products_of_all_ints_except_index = []

		# get the products of all ints before index
		product_so_far = 1
		for i in (0...int_arr.length)
			products_of_all_ints_except_index[i] = product_so_far
			product_so_far *= int_arr[i]
		end

		# multiply the product of all ints after each index by the products before each index
		i = int_arr.length - 1
		product_so_far = 1
		while i >= 0
			products_of_all_ints_except_index[i] *= product_so_far
			product_so_far *= int_arr[i]
			i -= 1
		end
		products_of_all_ints_except_index
	end
end

calculator = Calculator.new
calculator.products_of_all_ints_except_index_on1([1, 7, 3, 4])
puts calculator.power_by_iteration(6, 3)
puts calculator.power_by_recursion(6, 3)