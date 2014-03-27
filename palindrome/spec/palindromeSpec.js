//describe is a function and we are feeding it two arguments/params(a string "#zipObject" & an anonymous function)
   

describe("#palindrome", function () {
  
  it("should return true if a string is a palindrome", function() {
    expect(palindrome("Amore, Roma")).toEqual(true)
  });

  it("should return true if a string is a palindrome", function() {
    expect(palindrome("A man, a plan, a canal: Panama")).toEqual(true)
  });

  it("should return true if a string is a palindrome", function() {
    expect(palindrome("No 'x' in 'Nixon'")).toEqual(true)
  });

  it("should return false if a string is not a palindrome", function() {
    expect(palindrome("Abba Zabba, you're my only friend")).toEqual(false)
  });

  it("should return false if a string is not a palindrome", function() {
    expect(palindrome("Jasper is my little friend.")).toEqual(false)
  });

});