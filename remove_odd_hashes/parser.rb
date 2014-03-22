require 'debugger'
require 'ap'

class Parser

  attr_reader :json

  def initialize(json)
    @json = json
  end

  def remove_odd_hashes
    sum = 0
    self.json.each do |hash|
      hash.each do |key, value|
        sum += value
      end
    end
    0#you can check for "%" operator
  end

end

# myParser = Parser.new([{a: 5, b: 5}, {a: 3, b: 4}, {a: 2, b: 0}])
# myParser.remove_odd_hashes