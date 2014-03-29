//birthday constructor tests
describe("The Birthday constructor", function() {

  var birthday = new Birthday(new Date(2008,04,02));

  it('creates a new Birthday object', function() {
    expect(birthday).toBeDefined();
    expect(birthday).not.toBe(null);
    expect(birthday).toBeTruthy();
  });

  it('should respond to proper methods', function () {
    expect(birthday.dateString).toBeDefined();
    expect(birthday.dateString).toEqual('422008');
  });
});

//#getMagicNumber prototype tests
describe("#getMagicNumber", function() {

  it("should return the numerology for a birthday", function() {
    var birthday = new Birthday(new Date(2008,04,02));
    expect(birthday.getMagicNumber()).toEqual(7)
  });

  it("should return the numerology for a birthday", function() {
    var birthday = new Birthday(new Date(1964,10,13));
    expect(birthday.getMagicNumber()).toEqual(7)
  });

  it("should return the numerology for a birthday", function() {
    var birthday = new Birthday(new Date(1998,01,01));
    expect(birthday.getMagicNumber()).toEqual(2)
  });

  it("should return the numerology for a birthday", function() {
    var birthday = new Birthday(new Date(1977,10,22));
    expect(birthday.getMagicNumber()).toEqual(2)
  });

  it("should never return a value greater than 9", function() {
    var birthday = new Birthday(new Date(1977,10,22));
    expect(birthday.getMagicNumber()).toBeLessThan(10)
  });

});
