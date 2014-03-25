require 'debugger'
require 'ap'

class Hash

  def get_value(default, *keys) #'splat' or asterisk operator specifies an optional length variable list passed to the method as an array called keys
    if keys.length > 1 #if more than one arg
      if self[keys[0]].class == Hash # and the first arg is a hash key
        self[keys[0]][keys[1]] ||= default # return the value of the nested hash
      elsif self[keys[1]] # but if first arg is not a hash key and a second arg exists, we know the second arg is not a possible key
        self[keys[0]] ||= default # so return only the value of first key or default
      else # otherwise if keys[1] doesn't exist
        default #return the default
      end
    else
      self[keys[0]] ||= default # otherwise if only one key return its value or default
    end
  end

end


