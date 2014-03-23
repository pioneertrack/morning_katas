require './hash'

describe Hash do 

  describe '#initialize' do 
    it 'should create an instance of the class Hash' do 
      hash = Hash.new
      hash.should be_true
    end
  end


end