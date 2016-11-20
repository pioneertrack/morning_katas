require './quicksort.rb'

describe QuickSort do 
  
  describe '#sort!' do

    subject(:quicksort) { QuickSort.new }

    it 'should sort the values in an array' do
      quicksort.array = [1, 4, 0, 10, 5, 6]
      expect(quicksort.sort!).to eq([0, 1, 4, 5, 6, 10])
    end

    it 'should sort the values in an array' do
      quicksort.array = [-1, 4, 0, -10, 5, 6]
      expect(quicksort.sort!).to eq([-10, -1, 0, 4, 5, 6])
    end
  end
end