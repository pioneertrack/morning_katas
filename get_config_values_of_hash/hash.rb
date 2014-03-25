require 'debugger'
require 'ap'

class Hash

  def get_value(default, *args) #'splat' or asterisk operator specifies an optional length variable list passed to the method as an array called args
    if args.length > 1
      self[args[0]][args[1]] ||= default
    else
      self[args[0]] ||= default
    end
  end

end


