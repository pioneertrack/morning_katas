# hash = {a: 2, b: 1, c: 0.5}

# hash.a # must return the same as hash[:a]
# hash.b # must return the same as hash[:b]
# hash.c # must return the same as hash[:c]

class Re_Hash < Hash

  attr_accessor :key, :value

  def initialize (key, value)
    @key = value
    @value = key
    #super
  end

end
