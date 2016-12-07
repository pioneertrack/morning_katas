require './array'

describe Array do

  # given an array of integers, inrement the number as
  # though it were one integer
  describe "increment_number_array_by_while_loop" do

    it "should increment the number array by one" do
      expect([1,2,3].increment_number_array_by_while_loop).to eq([1,2,4])
    end

    it "should increment the number array by one" do
      expect([1,2,9].increment_number_array_by_while_loop).to eq([1,3,0])
    end

    it "should increment the number array by one" do
      expect([1,9,9].increment_number_array_by_while_loop).to eq([2,0,0])
    end

    it "should increment the number array by one" do
      expect([9,9,9].increment_number_array_by_while_loop).to eq([1,0,0,0])
    end
  end

  describe "increment_number_array_by_for_loop" do

    it "should increment the number array by one" do
      expect([1,2,3].increment_number_array_by_for_loop).to eq([1,2,4])
    end

    it "should increment the number array by one" do
      expect([1,2,9].increment_number_array_by_for_loop).to eq([1,3,0])
    end

    it "should increment the number array by one" do
      expect([1,9,9].increment_number_array_by_for_loop).to eq([2,0,0])
    end

    it "should increment the number array by one" do
      expect([9,9,9].increment_number_array_by_for_loop).to eq([1,0,0,0])
    end
  end

  describe "increment_number_array_by_recursion" do

    it "should increment the number array by one" do
      expect([1,2,3].increment_number_array_by_recursion).to eq([1,2,4])
    end

    it "should increment the number array by one" do
      expect([1,2,9].increment_number_array_by_recursion).to eq([1,3,0])
    end

    it "should increment the number array by one" do
      expect([1,9,9].increment_number_array_by_recursion).to eq([2,0,0])
    end

    it "should increment the number array by one" do
      expect([9,9,9].increment_number_array_by_recursion).to eq([1,0,0,0])
    end
  end
end