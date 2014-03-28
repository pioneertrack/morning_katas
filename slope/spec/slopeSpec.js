//describe is a function and we are feeding it two arguments/params(a string "#slope" & an anonymous function)
   
describe("The Line constructor", function() {
  
  it('creates a new line object', function() {
    var line = new Line([2, 7], [7, 2]);
    expect(line).not.toBe(null);
  });

  it('has two attributes, each with a length of two', function() {
    var line = new Line([2, 7], [7, 2]);
    expect(line.point1.length).toEqual(2)
    expect(line.point2.length).toEqual(2)
  });

});

describe("#getSlope", function() {
  
  it("should calculate the slope of a line between two points", function() {
    var line = new Line([2, 7], [7, 2]);
    expect(line.getSlope([2, 7], [7, 2])).toEqual(-1)
  });

  it("should calculate the slope of a line between two points", function() {
    var line = new Line([4, 1], [9, 7]);
    expect(line.getSlope()).toEqual(1.2)
  });

  //horizontal line test
  it("should calculate the slope of a horizontal line", function() {
    var line = new Line([2, 4], [10, 4]);
    expect(line.getSlope()).toEqual(0)
  });
  //vertical line test
  it("should return null if the line passing between two points is vertical", function() {
    var line = new Line([6, 9], [6,1]);
    expect(line.getSlope()).toEqual(null)
  })

  it("should return null if the same point is given twice", function() {
    var line = new Line([1,3], [1,3]);
    expect(line.getSlope()).toEqual(null)
  });
  
});