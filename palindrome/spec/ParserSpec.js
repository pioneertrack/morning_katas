//describe is a function and we are feeding it two arguments/params(a string "#zipObject" & an anonymous function)
   

describe("Parser", function() {
  let parser;

  beforeEach(function() {
    parser = new Parser();
  });

  describe("#palindrome", function () {

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome("noon")).toEqual(true)
    });

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome("redivider")).toEqual(true)
    });
    
    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome("Amore, Roma")).toEqual(true)
    });

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome("A man, a plan, a canal: Panama")).toEqual(true)
    });

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome("No 'x' in 'Nixon'")).toEqual(true)
    });

    it("should return false if a string is not a palindrome", function() {
      expect(parser.palindrome("Abba Zabba, you're my only friend")).toEqual(false)
    });

    it("should return false if a string is not a palindrome", function() {
      expect(parser.palindrome("Jasper is my little friend.")).toEqual(false)
    });

  });
})