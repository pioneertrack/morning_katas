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

  describe '#find_value' do 

    subject(:parser) { Parser.new(['a', 'b', 'c']) }

    it 'should retrieve the value of the array at the index provided' do
      expect(parser.find_value(1, 'd').should eq('b'))
    end

    it 'should retrieve the value of the array at the index provided' do
      expect(parser.find_value(0, 'd').should eq('a'))
    end

    it 'should retrieve the value of the array at the index provided' do
      expect(parser.find_value(2, 'd').should eq('c'))
    end

    it 'should return the default if the index is out of bounds' do
      expect(parser.find_value(5, 'd').should eq('d'))
    end

    it 'should return the default if the index is out of bounds' do
      expect(parser.find_value(-5, 'd').should eq('d'))
    end

    it 'should return the default if the index is out of bounds' do
      expect(parser.find_value(4, 'd').should eq('d'))
    end

  end

end