describe("calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("#sumNumbers", function() {
    // multidimensional array with letters
    it("should sum all the numbers in a multidimensional array", function () {
      var arr = [0, 1, 2, ['a', 6, 2, ['b', 3, 4, [2, 4, 6]], 4, 'g'], 2, [2, 3, [2, 3]]];
      expect(calculator.sumNumbers(arr)).toBe(46);
    });

    // edge cases
    // empty array
    it("should sum all the numbers in a multidimensional array", function () {
      var arr = [];
      expect(calculator.sumNumbers(arr)).toBe(0);
    });
    
    // empty multidimensional array
    it("should sum all the numbers in a multidimensional array", function () {
      var arr = [[],[]];
      expect(calculator.sumNumbers(arr)).toBe(0);
    });

    // array with negative integers
    it("should sum all the numbers in a multidimensional array, including negative values", function () {
      var arr = [1, -2, -5, 20];
      expect(calculator.sumNumbers(arr)).toBe(14);
    });

    it("should throw an exception if an object other than array is passed as an argument", function() {
      var arr = 'g';
      expect(function() {
        calculator.sumNumbers(arr);
      }).toThrowError("This function only accepts array arguments");
    });

    it("should throw an exception if an object other than array is passed as an argument", function() {
      var arr = {'hello': 'world'};
      expect(function() {
        calculator.sumNumbers(arr);
      }).toThrowError("This function only accepts array arguments");
    });
  });

  describe("#uniqueValues", function() {
    it("should return the unique values in an array", function () {
      var arr = ['banana', 'gophers', 'banana', 'gophers', 'trees', 'apples', 'apples']
      expect(calculator.uniqueValues(arr)).toEqual(['banana', 'gophers', 'trees', 'apples']);
    });

    // edge cases
    // empty array
    it("should return the unique values in an array", function () {
      var arr = [];
      expect(calculator.uniqueValues(arr)).toEqual([]);
    });
  });
})