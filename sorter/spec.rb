require './sorter.rb'

describe Sorter do 
  describe '#initialize' do

    subject(:sorter) { Sorter.new([2, 5, 3])}

    it 'should create a new Sorter object' do
      sorter.is_a?(Sorter).should be true
    end

    it 'should respond to proper methods' do
      sorter.should respond_to(:input_object)
    end

    it 'should return the value of the input object attribute' do
      expect(sorter.input_object).to eq([2, 5, 3])
    end
  end

  describe '#selection_sort' do

    subject(:sorter) { Sorter.new }

    it 'should sort the values in an array' do
      input = [1, 4, 0, 10, 5, 6]
      expect(sorter.selection_sort(input)).to eq([0, 1, 4, 5, 6, 10])
    end
  end
end