function Calculator() {
}

// example use of recursion to handle nested arrays
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

Calculator.prototype.uniqueValues = function(arr) {
  // iterate over arr & uniques array
  // if uniques doesn't include current arr value, push in array
  var uniquesSoFar = []
  for(var i=0; i<arr.length; i++) {
    var exists = false; // set flag to false for each el in arr
    for(var j=0; j<uniquesSoFar.length; j++) {
      if (uniquesSoFar[j] == arr[i]) { exists = true; }
    }
    if (exists == false) { uniquesSoFar.push(arr[i]); }
  }
  return uniquesSoFar
}

