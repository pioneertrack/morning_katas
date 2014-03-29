
//birthday constructor tests
describe("The Birthday constructor", function() {

  it('creates a new Birthday object', function() {
    var birthday = new Birthday(date);
    expect(birthday).toBeDefined();
    expect(birthday).not.toBe(null);
    expect(birthday).toBeTruthy();
  });

  it('has a date attribute', function () {
    var birthday = new Birthday(date);
    expect(birthday.date).toBeDefined();
    expect(typeof(birthday.date)).toEqual(String);
    expect(birthday.date.length).toEqual(10);
  });

});

//#getMagicNumber prototype tests
describe("getMagicNumber", function() {
  
  it("should never return a value greater than 10", function() {
    expect(date.getMagicNumber()).toBeLessThan(11)
  });

});