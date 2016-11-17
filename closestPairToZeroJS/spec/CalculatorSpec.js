describe("Calculator", function () {
  let calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  describe("#closestPairSumToZero", function() {
    it("should output a array subset pair of elements whose sum is closest to zero", function() {
      let arr = [1, 5, 3, 4, 2, 1]
      expect(calculator.closestPairSumToZero(arr)).toEqual([1,1])
    })
  })

  describe("#closestPairSumToZero", function() {
    it("should output a array subset pair of elements whose sum is closest to zero", function() {
      let arr = [1, 5, -3, 4, 2, 3, 1]
      expect(calculator.closestPairSumToZero(arr)).toEqual([-3,3])
    })
  })
})