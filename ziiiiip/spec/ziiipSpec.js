//describe is a function and we are feeding it two arguments/params(a string "#zipObject" & an anonymous function)
//function () { is like a "do"  

describe("#zipObject", function () {
  
  it("returns an object of keys and values", function() {
    zipObject(['fred', 'barney'], [30, 40]).toEqual({ 'fred': 30, 'barney': 40 })
  });

  it("returns an object of keys and values", function() {
    zipObject([['fred', 30], ['barney', 40]]).toEqual({ 'fred': 30, 'barney': 40 })
  });

  it("returns an object of keys and values", function() {
    zipObject(['fred', 'barney']).toEqual({ fred: undefined, barney: undefined })
  });

  it("returns an object of keys and values", function() {
    zipObject().toEqual({})
  });

});


// Let's implement the zipObject function that enables such results

// zipObject(['fred', 'barney'], [30, 40])
// => { 'fred': 30, 'barney': 40 }

// zipObject([['fred', 30], ['barney', 40]])
// => { 'fred': 30, 'barney': 40 }

// The zipObject creates an object composed from arrays of keys and values. It is provided with either a single two dimensional array, i.e. [[key1, value1], [key2, value2]] or with two arrays, one of keys and one of corresponding values.

// If only keys are given, then set the values to undefined.

// zipObject(['fred', 'barney'])
// { fred: undefined, barney: undefined }

// If neither keys nor values are specified, then return {}

// zipObject()
// {}