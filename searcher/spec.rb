require './array.rb'

describe Array do
  describe '#binary_search' do

    it 'should search for an item in an array and return its index' do
      input = [0,1,2,3,4,5,10,18]
      expect(input.binary_search(0, input.length-1, 10)).to eq(6)
    end

    it 'should search for an item in an array and return its index' do
      input = [0,1,2,3,4,5,10,18]
      expect(input.binary_search(0, input.length-1, 9)).to eq("Not Found")
    end
  end
end
