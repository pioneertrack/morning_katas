describe("Merger",  function() {
  let merger;

  beforeEach(function() {
    merger = new Merger();
  });

  describe("#mergeSortedArrays", function() {
    it("should input two sorted arrays and output one sorted array", function() {
      let arr1 = [1, 3, 5, 10, 20];
      let arr2 = [0, 1, 2, 4, 8];
      expect(merger.mergeSortedArrays(arr1, arr2)).toEqual([0, 1, 1, 2, 3, 4, 5, 8, 10, 20]);
    })

    describe("edge cases", function() {

      it("should handle empty arrays", function() {
        let arr1 = [];
        let arr2 = [-2, 0, 2, 4, 8];
        expect(merger.mergeSortedArrays(arr1, arr2)).toEqual([-2, 0, 2, 4, 8]);
      })

      it("should handle negative values", function() {
        let arr1 = [1, 3, 5, 10, 20];
        let arr2 = [-2, 0, 2, 4, 8];
        expect(merger.mergeSortedArrays(arr1, arr2)).toEqual([-2, 0, 1, 2, 3, 4, 5, 8, 10, 20]);
      })
    })
  })
})