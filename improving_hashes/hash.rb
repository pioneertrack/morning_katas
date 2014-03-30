require 'debugger'

class Hash

  def method_missing(key, *arguments)
    if (self.methods-Object.methods).include?(key)
      self.key
    elsif self.has_key?(key.to_s)
      self[key.to_s] 
    elsif self.has_key?(key)
      self[key]
    else
      NoMethodError 
    end
  end

end


# If the hash already has a method with the key name, the existent method must be kept (e.g. {size: 5}.size must return the hash size, and not the value)
# If the hash doens't include the key, you must return the that call an inexistent method in hash (e.g. hash = {a: 1}; hash.b must throw the NoMethodError exception)
# String keys should work as well (e.g. {'a' => 'b'}.a must return 'b')
# Some tips: