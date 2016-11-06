class Recursor

	def power_by_recursion(base, exp)
	  if exp === 0
	  	return 1
	  else
	  	return base * power_by_recursion(base, exp - 1)
	  end
	end

	def power_by_iteration(base, exp)
		result = 1
		exp.times do
			result *= base
		end
		result
	end
end