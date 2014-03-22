require "./remove_odd_hashes"

describe Parser do

  describe "#remove_odd_hashes" do
    it "should return only the hashes which keys sum to an even number" do
      expect(remove_odd_hashes([{a: 5, b: 5}, {a: 3, b: 4}, {a: 2, b: 0}])).to eq([{a: 5, b: 5}, {a: 2, b: 0}])
    end
  end

end
