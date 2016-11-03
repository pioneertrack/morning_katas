require './calculator'

describe Calculator do

	subject(:calculator) { Calculator.new }

	describe '#highest_product_of_three' do
		it "should return the highest product of three integers from an array" do
			expect(subject.highest_product_of_three([1, 4, 5, 2, 9])).to eq(180)
		end

		it "should return the highest product of three integers from an array" do
			expect(subject.highest_product_of_three([10,9,8,7,6,5,4,3,2,100])).to eq(9000)
		end

		context 'edge cases' do
			it "should handle zero values" do
				expect(subject.highest_product_of_three([0, 5, 4, 1, 0, 10])).to eq(200)
			end

			it "should hangle negative values" do
				expect(subject.highest_product_of_three([0, 5, -4, 1, 0, -10])).to eq(200)
			end
		end
	end
end
