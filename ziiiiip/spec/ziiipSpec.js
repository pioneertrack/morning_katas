//describe is a function and we are feeding it two arguments/params(a string "#zipObject" & an anonymous function)
   
describe("#zipObject", function () {
  
  it("returns an object of keys and values", function() {
    expect(zipObject(['fred', 'barney'], [30, 40])).toEqual({ 'fred': 30, 'barney': 40 })
  });

  it("returns an object of keys and values", function() {
    expect(zipObject([['fred', 30], ['barney', 40]])).toEqual({ 'fred': 30, 'barney': 40 })
  });

  it("returns an object of keys and values", function() {
    expect(zipObject(['fred', 'barney'])).toEqual({ fred: undefined, barney: undefined })
  });

  it("returns an object of keys and values", function() {
    expect(zipObject()).toEqual({})
  });

});