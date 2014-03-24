function zipObject(keys, values) {
  var myHash = {};
  var i = 0;
  //if no paramaters are given, retun an empty object
  if (!keys && !values) {
    return {};
  } else {
    while (i < keys.length) {
      //if a 2D array is given, for each inner array, set myHash key to index 0 and its value to index 1 
      if (typeof (keys[0]) === 'object') {
        myHash[keys[i][0]] = keys[i][1];
      //if two arrays are given, set myHash keys equal to indices in array1 and values equal to indices in array 2
      } else if (keys && values) {
        myHash[keys[i]] = values[i];
      //if only one array is given, set myHash keys equal to array indices corresponing values to undefined
      } else if (keys && values === undefined) {
        myHash[keys[i]] = undefined;
      }
      i++;
    }
    return myHash;
  }
}