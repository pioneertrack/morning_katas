require './hash'

describe Hash do 

  describe '#key' do 

    subject(:my_hash) { Hash['a', 100, 'b', 200] }

    it 'should return the value of the hash key' do 
      expect(subject.a).to eq(100)
    end

    subject(:my_hash) { Hash[:a, 100, :b, 200] }

    it 'should return the value of the hash key' do 
      expect(subject.b).to eq(200)
    end

    it 'should return a NoMethodError exception' do 
      expect(subject.c).to eq(NoMethodError)
    end

    it 'should return the size of the hash if key is size' do
      expect(subject.size).to eq(2)
    end

    subject(:my_hash) { {'a' => 1} }
    
    it 'should return the size of the hash if key is size' do
      expect(subject.a).to eq(1)
    end

  end

end

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