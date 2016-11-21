require './array.rb'

describe Array do 
  describe '#initialize' do

    subject(:array) { Array.new([2, 5, 3])}

    it 'should create a new array object' do
      array.input.is_a?(Array).should be true
    end

    it 'should respond to proper methods' do
      array.should respond_to(:input)
    end

    it 'should return the value of the input object attribute' do
      expect(array.input).to eq([2, 5, 3])
    end
  end

  describe '#selection_sort' do

    subject(:array) { Array.new }

    it 'should sort the values in an array' do
      input = [1, 4, 0, 10, 5, 6]
      expect(input.selection_sort).to eq([0, 1, 4, 5, 6, 10])
    end
  end

  describe '#quick_sort' do

    subject(:array) { Array.new }

    it 'should sort the values in an array' do
      input = [1, 4, 0, 10, 5, 6]
      expect(input.quick_sort).to eq([0, 1, 4, 5, 6, 10])
    end

    it 'should sort the values in an array' do
      input = [-1, 4, 0, -10, 5, 6]
      expect(input.quick_sort).to eq([-10, -1, 0, 4, 5, 6])
    end
  end

  describe '#in_place_quick_sort' do

    subject(:array) { Array.new }

    it 'should sort the values in an array' do
      input = [1, 4, 0, 10, 5, 6]
      right = input.length-1
      expect(input.in_place_quick_sort(input, 0, right)).to eq([0, 1, 4, 5, 6, 10])
    end

    # it 'should sort the values in an array' do
    #   input = [-1, 4, 0, -10, 5, 6]
    #   expect(input.in_place_quick_sort).to eq([-10, -1, 0, 4, 5, 6])
    # end
  end
end