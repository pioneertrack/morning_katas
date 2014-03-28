function getSlope(point1, point2) {
  var yDiff = point1.pop() - point2.pop();
  var xDiff = point1.pop() - point2.pop();
  var slope = yDiff / xDiff;
  if (xDiff == 0) {
    return null;
  } else if (yDiff == 0) {
    return 0;
  } else {
    return slope;
  }
}