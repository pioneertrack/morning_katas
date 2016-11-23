require './merger.rb'

describe 'Merger' do
  describe '#initialize' do
    subject(:merger) {  Merger.new }

    it 'should create a new Merger subject' do
      merger.is_a?(Merger).should be true
    end

    it 'should respond to proper methods' do
      merger.should respond_to(:arrays)
    end

    it 'should create proper arrays upon initialization' do
      subject.arrays.is_a?(Array).should be true
      subject.arrays.each do |array| 
        array.is_a?(Array).should be true
      end
    end
  end

  describe '#merge_arrays' do
    subject(:merger) {  Merger.new }

    it 'should merge two sorted arrays, output one sorted array' do
      expect(merger.merge_arrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19])).to eq([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19])
    end

    it 'should merge two sorted arrays, output one sorted array' do
      expect(merger.merge_arrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19, 20])).to eq([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 20])
    end
  end
end