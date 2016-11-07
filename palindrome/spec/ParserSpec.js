//describe is a function and we are feeding it two arguments/params(a string "#zipObject" & an anonymous function)
   

describe("Parser", function() {
  let parser;

  beforeEach(function() {
    parser = new Parser();
  });

  describe("#palindrome_via_iteration", function () {

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome_via_iteration("noon")).toEqual(true)
    });

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome_via_iteration("redivider")).toEqual(true)
    });

    describe("string with non-alphanumeric chars", function () {
    
      it("should return true if a string is a palindrome", function() {
        expect(parser.palindrome_via_iteration("Amore Roma")).toEqual(true)
      });

      it("should return true if a string is a palindrome", function() {
        expect(parser.palindrome_via_iteration("A man, a plan, a canal: Panama")).toEqual(true)
      });

      it("should return true if a string is a palindrome", function() {
        expect(parser.palindrome_via_iteration("No 'x' in 'Nixon'")).toEqual(true)
      });

      it("should return false if a string is not a palindrome", function() {
        expect(parser.palindrome_via_iteration("Abba Zabba, you're my only friend")).toEqual(false)
      });

      it("should return false if a string is not a palindrome", function() {
        expect(parser.palindrome_via_iteration("Jasper is my little friend.")).toEqual(false)
      });
    });
  });

  describe("#palindrome_via_recursion", function () {

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome_via_recursion("noon")).toEqual(true)
    });

    it("should return true if a string is a palindrome", function() {
      expect(parser.palindrome_via_recursion("redivider")).toEqual(true)
    });

    describe("string with non-alphanumeric chars", function () {
    
      it("should return true if a string is a palindrome", function() {
        expect(parser.palindrome_via_recursion("Amore Roma")).toEqual(true)
      });

      it("should return true if a string is a palindrome", function() {
        expect(parser.palindrome_via_recursion("A man, a plan, a canal: Panama")).toEqual(true)
      });

      it("should return true if a string is a palindrome", function() {
        expect(parser.palindrome_via_recursion("No 'x' in 'Nixon'")).toEqual(true)
      });

      it("should return false if a string is not a palindrome", function() {
        expect(parser.palindrome_via_recursion("Abba Zabba, you're my only friend")).toEqual(false)
      });

      it("should return false if a string is not a palindrome", function() {
        expect(parser.palindrome_via_recursion("Jasper is my little friend.")).toEqual(false)
      });
    });

  });
})