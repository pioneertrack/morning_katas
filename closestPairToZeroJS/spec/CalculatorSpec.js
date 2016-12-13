describe("Calculator", function () {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("#closestPairSumToZero", function() {
    it("should output a array subset pair of elements whose sum is closest to zero", function() {
      let arr = [1, 5, 3, 4, 2, 1];
      expect(calculator.closestPairSumToZero(arr)).toEqual([1, 1]);
    });
  });

  describe("#closestPairSumToZero", function() {
    it("should output a array subset pair of elements whose sum is closest to zero", function() {
      let arr = [1, 5, -3, 4, 2, 3, -1];
      expect(calculator.closestPairSumToZero(arr)).toEqual([3, -3]);
    })
  })

  describe("#allZeroSumPairs", function() {
    it("should return an 2D array with all pairs that sum to zero", function() {
      let arr = [1, -1, 2, 4, 6, -2, 80, 30, -6];
      expect(calculator.allZeroSumPairs(arr)).toEqual([[-1, 1],[-2, 2],[-6, 6]]);
    });
  });

  describe("#OofNSolution", function() {
    it("should return an 2D array with all pairs that sum to zero", function() {
      let arr = [1, -1, 2, 4, 6, -2, 80, 30, -6];
      expect(calculator.OofNSolution(arr)).toEqual([[-1, 1],[-2, 2],[-6, 6]]);
    });
  });

  describe("#pairSumsTo100", function() {
    it("should return a 2D array with all the pairs that sum to 100", function() {
      let arr = [20, -20, 50, 80, 25, 20, -125, -50];
      expect(calculator.pairSumsTo100(arr)).toEqual([[80, 20], [20, 80], [-125, 25], [-50, 50]]);
    });
  });
});
