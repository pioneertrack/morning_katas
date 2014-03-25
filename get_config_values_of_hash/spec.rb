require './hash'

describe Hash do 

  describe '#get_value' do

    subject(:my_hash) { { :files => { :mode => 0x777 }, :name => "config" } }

    context 'parameter errors' do 

      it 'should raise an error if less than one parameter are given' do 
        expect{subject.get_value}.to raise_error(ArgumentError) # note the curly brace syntax defines a block object upon which you can place the expectation; this allows rspec to catch the error and provide its own handling (cf. parantheses, which execute the code before passing it to rspec)
      end

      it 'should not raise an error if at least one parameters are given' do
        expect{subject.get_value("")}.to_not raise_error(ArgumentError)
      end

    end

    context 'expected results' do

      it 'should return the value of a given key' do
        expect(subject.get_value( "", :name)).to eq("config")
      end

      it 'should return the value of a given key' do
        expect(subject.get_value( 0x0, :files, :mode )).to eq("0x777")
      end

      it 'should return the value of a given key' do
        expect(subject.get_value( 80, :port )).to eq("80")
      end

      it 'should return the value of a given key' do
        expect(subject.get_value( "cfg", :files, :extension )).to eq("cfg")
      end

    end

  end

end


# Description:

# Write a simple method for the Hash-class that can get the configuration-value from a JSON-interpreted hash. Its signature is:

# Hash.get_value( default, key1, ... )

# key1, ... refer to the hash-keys of the JSON-interpreted hash, which is a hash of hash values. 

#If the path of keys is found, it should return the found value, else it should return the default value.
# Here are some examples on how to use it:

# config = { :files => { :mode => 0x777 }, :name => "config" }

# config.get_value( 0x0, :files, :mode ) == 0x777
# config.get_value( "", :name ) == "config"
# config.get_value( 80, :port ) == 80
# config.get_value( "cfg", :files, :extension ) == "cfg"