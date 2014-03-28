//line constructor
function Line(point1, point2) {
  this.point1 = point1
  this.point2 = point2
}


function getSlope(point1, point2) {
  var yDiff = point1.pop() - point2.pop();
  var xDiff = point1.pop() - point2.pop();
  var slope = yDiff / xDiff;
  return isNaN(slope) || slope == Infinity ? null : slope
}

