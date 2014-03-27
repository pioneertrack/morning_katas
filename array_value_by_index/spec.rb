require './parser.rb'

describe Parser do

  describe '#initialize' do 

    subject(:parser) { Parser.new(['a', 'b', 'c']) }

    it 'should create a new Parser subject' do
      subject.is_a?(Parser).should be_true
    end
    
    it 'should create an instance of the class Parser' do 
      parser.should be_true
    end

    it 'should have an attribute named data' do
        parser.data.should be_true
      end

    it 'should respond to proper methods' do 
      parser.should respond_to(:data)
    end

    context 'data attribute' do

      it 'should be of the class array' do
        expect(parser.data.class).to eq(Array)
      end

      it 'should have a length of 3' do 
        expect(parser.data.length).to eq(3)
      end

    end

  end

end


# Complete the solution. It should try to retrieve the value of the array at the index provided. If the index is out of the array's max bounds then it should return the default value instead.

# Example:

# data = ['a', 'b', 'c']
# solution(data, 1, 'd') # should == 'b'
# solution(data, 5, 'd') # should == 'd'

# negative values work as long as they aren't out of the length bounds
# solution(data, -1, 'd') # should == 'c'
# solution(data, -5, 'd') # should == 'd'