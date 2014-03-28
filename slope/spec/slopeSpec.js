//describe is a function and we are feeding it two arguments/params(a string "#slope" & an anonymous function)
   
describe("#getSlope", function() {
  
  it("should calculate the slope of a line between two points", function() {
    expect(getSlope([2, 7], [7, 2])).toEqual(-1)
  });

  it("should calculate the slope of a line between two points", function() {
    expect(getSlope([4, 1], [9, 7])).toEqual(1.2)
  });

  it("should return null if the line passing between two points is vertical", function() {
    expect(getSlope([1, 2], [10,2])).toEqual(null)
  })

  it("should return null if the same point is given twice", function() {
    expect(getSlope([1,3], [1,3])).toEqual(null)
  });
  
});