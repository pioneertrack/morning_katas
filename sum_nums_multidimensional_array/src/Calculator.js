function Calculator() {
}

Calculator.prototype.sumNumbers = function(arr) {
  if (Array.isArray(arr) == false) {
    throw new Error("This function only accepts array arguments");
  }
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    var type = typeof(arr[i]);
    if (type == "number") {
      sum += arr[i];
    } else if (type == "object") {
      sum += this.sumNumbers(arr[i]);
    } else {
      sum += 0;
    }
  }
  return sum;
}