require 'debugger'
require 'ap'

class Parser

  attr_reader :json

  def initialize(json)
    @json = json
  end

  def remove_odd_hashes
    sum = 0
    array = []
    self.json.each do |hash|
      #iterates over each hash in the json array and sums the values of its keys
      hash.each do |key, value|
        sum += value
      end
      #if the sum is even, shovels the hash into the new array
      if sum % 2 == 0
        array << hash
      end
      sum = 0
    end
    array
  end

end

# myParser = Parser.new([{a: 5, b: 5}, {a: 3, b: 4}, {a: 2, b: 0}])
# myParser.remove_odd_hashes