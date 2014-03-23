require './hash'

describe Hash do 

  # describe '#initialize' do 

  #   subject(:my_hash) { Hash.new( { :a => 100 } ) }
    
  #   it 'should create an instance of the class Hash' do 
  #     subject.should be_true
  #   end

  #   it 'should have attribute key' do 
  #     expect(subject.key).should be_true
  #   end

  #   it 'should have attribute value' do 
  #     expect(subject.value).should be_true
  #   end

  # end

  describe '#key' do 

    subject(:my_hash) { Hash['a', 100, 'b', 200] }

    it 'should return the value of the hash key' do 
      expect(subject.a).to eq(100)
    end


  end



end