require 'debugger'
require 'ap'

class Hash

  #my solution

  def get_value(default, *keys) #'splat' or asterisk operator specifies an optional length variable list passed to the method as an array called keys
    self[keys.shift][keys.first] || self[keys.first] || default

    # if keys.length > 1 #if more than one arg
    #   if self[keys.first].class == Hash # and the first arg is a hash (we only test to see if the first arg is a hash, because a second argument can only follow if this is the case)
    #     self[keys.shift][keys.first] || default # return the value of the nested hash
    #   else 
    #     default #otherwise return the default
    #   end
    # else
    #   self[keys.first] || default #if only one key return its value or default
    # end
  end

  #alternate solution by Lafwind from Codewars

  # def get_value(default, *keys) 
  #   clone = self #have to save self as new variable here in order to modify it below
  #   keys.each_with_index do |key, index|
  #     return default unless clone.class == Hash
  #     clone = clone[key] #reset clone each time we iterate
  #     return clone unless clone.nil? || index != keys.size - 1 #if index a doesn't equal key size keep going
  #   end
  #   default
  # end

end


