require 'debugger'
require 'ap'

class Parser

  attr_reader :data

  def initialize data=[]
    @data = data
  end

  def find_value index, default
    return self.data[index] ||= default
  end

end
