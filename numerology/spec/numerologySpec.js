//birthday constructor tests
describe("The Birthday constructor", function() {

  var birthday = new Birthday(new Date(2008,04,02));

  it('creates a new Birthday object', function() {
    expect(birthday).toBeDefined();
    expect(birthday).not.toBe(null);
    expect(birthday).toBeTruthy();
    // expect(Object.getPrototypeOf(birthday)).toEqual('object');
  });

  it('should respond to attr methods', function () {
    expect(birthday.month).toBeDefined();
    expect(birthday.month).toEqual('4');
    expect(birthday.day).toEqual('2');
    expect(birthday.year).toEqual('2008');
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


// In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date. Each time the sum exceeds 9, add up the 2 digits.
// For example, new Date('06/14/2010') = 5
// So, what is your number?
