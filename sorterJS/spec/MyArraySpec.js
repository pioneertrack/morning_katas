describe("MyArray", function() {
  let myArray;

  beforeEach(function() {
    myArray = new MyArray();
  })

  describe("#selectionSort", function() {
    it("should sort all the numbers in an array", function() {
      const int_array = [10, 0, -1, 5, 4, 8, 20];
      debugger
      expect(myArray.selectionSort(int_array)).toEqual([-1, 0, 4, 5, 8, 10, 20]);
    });
  });
});