require 'debugger'
require 'ap'

class Hash

  def get_value(default, *keys) #'splat' or asterisk operator specifies an optional length variable list passed to the method as an array called keys
    if keys.length > 1 #if more than one arg
      if self[keys.first].class == Hash # and the first arg is a hash (we only test to see if the first arg is a hash, because a second argument can only follow if this is the case)
        self[keys.shift][keys.first] ||= default # return the value of the nested hash
      else 
        default #otherwise return the default
      end
    else
      self[keys.first] ||= default #if only one key return its value or default
    end
  end

end


