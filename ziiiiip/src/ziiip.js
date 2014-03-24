function zipObject(params1, params2) {
  var myHash = {};
  var i = 0;
  if (!params1 && !params2) {
    return {};
  } else if (typeof (params1[0]) === 'object') {
    while (i < params1.length) {
      myHash[params1[i][0]] = params1[i][1];
      i++;
    }
  } else if (params1 && params2) {
    while (i < params1.length) {
      myHash[params1[i]] = params2[i];
      i++;
    }
  } else if (params1 && params2 === undefined) {
    while (i < params1.length) {
      myHash[params1[i]] = undefined;
      i++;
    }
  }
  return myHash;
}