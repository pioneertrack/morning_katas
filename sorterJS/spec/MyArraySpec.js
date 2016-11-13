describe("MyArray", function() {
  let myArray;

  beforeEach(function() {
    myArray = new MyArray();
  })

  describe("#selectionSort", function() {
    it("should sort all the numbers in an array", function() {
      let int_array = [10, 0, -1, 5, 4, 8, 20];
      expect(myArray.selectionSort(int_array)).toEqual([-1, 0, 4, 5, 8, 10, 20]);
    });
  });

  describe("#quickSort", function() {
    it("should sort all the numbers in an array", function() {
      let int_array = [10, 0, -1, 5, 4, 8, 20];
      expect(myArray.quickSort(int_array)).toEqual([-1, 0, 4, 5, 8, 10, 20]);
    });
  });

  describe("#trueQuickSort", function() {
    it("should sort all the numbers in an array", function() {
      let int_array = [10, 0, -1, 5, 4, 8, 20];
      let right = int_array.length - 1;
      expect(myArray.trueQuickSort(int_array, 0, right)).toEqual([-1, 0, 4, 5, 8, 10, 20]);
    });
  });
});