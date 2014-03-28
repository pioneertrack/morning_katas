function getSlope(point1, point2) {
  var yDiff = point1.pop() - point2.pop();
  var xDiff = point1.pop() - point2.pop();
  var slope = yDiff / xDiff;
  return isNaN(slope) || slope == Infinity ? null : slope
}

