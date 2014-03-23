require 'debugger'

class Hash

  def method_missing(key, *arguments, &block)
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
