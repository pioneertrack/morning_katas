require 'debugger'

class Hash

  def method_missing(key, *arguments)
    if (self.methods-Object.methods).include?(key)
      self.key
    elsif self.has_key?(key)
      self[key.to_s] ||= self[key]
    else
      NoMethodError 
    end
  end

end
