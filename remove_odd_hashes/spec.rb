require "./parser.rb"

describe Parser do

  describe "#remove_odd_hashes" do

    it "should return only the hashes which keys sum to an even number" do
      myParser = Parser.new([{a: 5, b: 5}, {a: 3, b: 4}, {a: 2, b: 0}])
      expect(myParser.remove_odd_hashes).to eq([{a: 5, b: 5}, {a: 2, b: 0}])
    end

    it "should return only the hashes which keys sum to an even number" do
      myParser = Parser.new([{a: 10, b: 0}, {a: 2, b: 1}, {a: 20, b: 0}, {a: 1, b: 6}])
      expect(myParser.remove_odd_hashes).to eq([{a: 10, b: 0}, {a: 20, b: 0}])
    end

    it "should return only the hashes which keys sum to an even number" do
      myParser = Parser.new([{a: 10, b: 0}, {a: 2, b: 1}, {a: 20, b: 0}, {a: 1, b: 6}])
      expect(myParser.remove_odd_hashes).not_to include({a: 1, b: 6})
    end

    it "should return only the hashes which keys sum to an even number" do
      myParser = Parser.new([{a: 10, b: 0}, {a: 2, b: 1}, {a: 20, b: 0}, {a: 1, b: 6}])
      expect(myParser.remove_odd_hashes).not_to include({a: 2, b: 1})
    end

  end

end
