//line constructor
function Line(point1, point2) {
  this.point1 = point1
  this.point2 = point2
}

Line.prototype.getSlope = function() {
  var yDiff = this.point1.pop() - this.point2.pop();
  var xDiff = this.point1.pop() - this.point2.pop();
  var slope = yDiff / xDiff;
  return isNaN(slope) || slope == Infinity ? null : slope
}

