require 'debugger'

class Hash

  def method_missing(key, *arguments, &block)
    if self.has_key?(key.to_s)
      self[key.to_s]
    elsif self.has_key?(key)
      self[key]
    end
  end


end
