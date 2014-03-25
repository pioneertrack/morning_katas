require 'debugger'
require 'ap'

class Hash

  def get_value(default, *keys) #'splat' or asterisk operator specifies an optional length variable list passed to the method as an array called keys
    if keys.length > 1
      self[keys[0]][keys[1]] ||= default
    else
      self[keys[0]] ||= default
    end
  end

end


