
//birthday constructor tests
describe("The Birthday constructor", function() {

  var birthday = new Birthday("04/02/2008");

  it('creates a new Birthday object', function() {
    expect(birthday).toBeDefined();
    expect(birthday).not.toBe(null);
    expect(birthday).toBeTruthy();
  });

  it('has a date attribute', function () {
    expect(birthday.date).toBeDefined();
    expect(typeof(birthday.date)).toEqual('string');
    expect(birthday.date.length).toEqual(10);
  });

});

//#getMagicNumber prototype tests
describe("getMagicNumber", function() {
  
  it("should never return a value greater than 10", function() {
    expect(date.getMagicNumber()).toBeLessThan(11)
  });

});