require 'debugger'
require 'ap'

class Hash

  def get_value(default, *args) #'splat' or asterisk operator specifies an optional length variable list passed to the method as an array called args
    args.each do |arg|
      self[arg] || default
    end
  end

end
