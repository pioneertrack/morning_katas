describe("MyArray", function() {
  let array;

  beforeEach(function() {
    array = new MyArray();
  });

  describe("#incrementNumberArrayWhileLoop", function() {
    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayWhileLoop([1, 2, 3])).toEqual([1, 2, 4]);
    });

    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayWhileLoop([1, 2, 9])).toEqual([1, 3, 0]);
    });

    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayWhileLoop([1, 9, 9])).toEqual([2, 0, 0]);
    });

    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayWhileLoop([9, 9, 9])).toEqual([1, 0, 0, 0]);
    });
  });

  describe("#incrementNumberArryRecursion", function() {
    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayRecursion([1, 2, 3], 2)).toEqual([1, 2, 4]);
    });

    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayRecursion([1, 2, 9], 2)).toEqual([1, 3, 0]);
    });

    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayRecursion([1, 9, 9], 2)).toEqual([2, 0, 0]);
    });

    it("should increment the number array by one, as if it were a number", function() {
      expect(array.incrementNumberArrayRecursion([9, 9, 9], 2)).toEqual([1, 0, 0, 0]);
    });
  });
})