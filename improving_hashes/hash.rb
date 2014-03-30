require 'debugger'

class Hash

  def method_missing(symbol, *args)
    self[symbol] || self[symbol.to_s] || super
  end

  # def method_missing(key, *arguments)
  #   self.methods.include?(key) ? self.key : self[key.to_s] || self[key] || NoMethodError 
  # end

end