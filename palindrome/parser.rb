require 'byebug'

class Parser

  attr_reader :string

  def initialize string=""
    @string = string
    @stripped = false
  end

  def palindrome_by_iteration string=""
     # remove non-alphanumeric chars and downcase
    string.gsub!(/\W+/, '')
    string.downcase!

    return true if string.length <= 1 # base case

    i = string.length - 1
    reverse_string = ""
    while i >= 0
      reverse_string << string[i]
      i -= 1
    end

    reverse_string == string ? true : false
  end

  def palindrome_by_recursion string=""
    if @stripped == false
      string.gsub!(/\W+/, '')
      string.downcase!
      @stripped = true
    end
    
    return true if string.length <= 1 #base case

    string[0] == string[-1] && palindrome_by_recursion(string[1..-2])
  end
end