require './parser'

describe Parser do

  describe '#initialize' do 

    subject(:parser) { Parser.new("foo") }

    it 'should create a new Parser subject' do
      parser.is_a?(Parser).should be true
    end

    it 'should respond to proper methods' do
      parser.should respond_to(:string)
    end
  end

  describe '#palindrome_by_iteration' do

    subject(:parser) { Parser.new }

    it "should return true if a string is a palindrome; false if not" do
      expect(parser.palindrome_by_iteration("foofoof")).to eq(true)
    end

    it "should return true if a string is a palindrome; false if not" do
      expect(parser.palindrome_by_iteration("A man, a plan, a canal: Panama")).to eq(true)
    end

    it "should return true if a string is a palindrome; false if not" do
      expect(parser.palindrome_by_iteration("A man, a plan, a canal, a rabbit: Panama Rabbit?")).to eq(false)
    end
  end

  describe '#palindrome_by_recursion' do

    subject(:parser) { Parser.new }

    it "should return true if a string is a palindrome; false if not" do
      expect(parser.palindrome_by_recursion("foofoof")).to eq(true)
    end

    it "should return true if a string is a palindrome; false if not" do
      expect(parser.palindrome_by_recursion("A man, a plan, a canal: Panama")).to eq(true)
    end

    it "should return true if a string is a palindrome; false if not" do
      expect(parser.palindrome_by_recursion("A man, a plan, a canal, a rabbit: Panama Rabbit?")).to eq(false)
    end
  end

end