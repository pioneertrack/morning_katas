require "./parser.rb"

describe Parser do

  describe "#remove_odd_hashes" do

    it "should sum the values of each hash" do
      myParser = Parser.new(([{a: 5, b: 5}]))
      expect(myParser.remove_odd_hashes).to eq(10)
    end

    it "should return only the hashes which keys sum to an even number" do
      myParser = Parser.new([{a: 5, b: 5}, {a: 3, b: 4}, {a: 2, b: 0}])
      expect(myParser.remove_odd_hashes).to eq([{a: 5, b: 5}, {a: 2, b: 0}])
    end
  end

end
