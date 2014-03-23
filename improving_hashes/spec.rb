require './hash'

describe Re_Hash do 

  describe '#initialize' do 

    subject(:my_hash) { Re_Hash.new(:a, 100) }
    
    it 'should create an instance of the class Hash' do 
      subject.should be_true
    end

    it 'should have attribute key' do 
      expect(subject.key).should be_true
    end

    it 'should have attribute value' do 
      expect(subject.value).should be_true
    end

  end


end