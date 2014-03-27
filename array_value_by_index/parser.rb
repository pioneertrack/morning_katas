require 'debugger'
require 'ap'

class Parser

  attr_reader :data

  def initialize data=[]
    @data = data
  end

  def find_value index, default
    data = self.data
    index.abs > data.length ? default : data[index]
  end

end
