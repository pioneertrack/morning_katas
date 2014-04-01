require './hash'

describe Hash do 

  describe '#get_value' do

    subject(:my_hash) { { :files => { :mode => 0x777 }, :name => "config" } }

    context 'parameter errors' do 

      it 'should raise an error if less than one parameter is given' do 
        expect{subject.get_value}.to raise_error(ArgumentError) # note the curly brace syntax defines a block object upon which you can place the expectation; this allows rspec to catch the error and provide its own handling (cf. parantheses, which execute the code before passing it to rspec)
      end

      it 'should not raise an error if at least one parameter are given' do
        expect{subject.get_value("")}.not_to raise_error(ArgumentError)
      end

    end

    context 'expected results' do

      it 'should return the default if no keys are given' do
        expect(subject.get_value("wow")).to eq("wow")
      end

      it 'should return the value of a given key' do
        expect(subject.get_value("", :name)).to eq("config")
      end

      it 'should return the value of a given key' do
        expect(subject.get_value(0x0, :files, :mode)).to eq(0x777)
      end

      it 'should return the default value if a key does not exist' do
        expect(subject.get_value(80, :port)).to eq(80)
      end

      it 'should return the default value if a key does not exist' do
        expect(subject.get_value("cfg", :files, :extension)).to eq("cfg")
      end

      it 'should return the default value if a key does not exist' do
        expect(subject.get_value("conf", :name, :path)).to eq("conf")
      end
   
    end

  end

end