
//birthday constructor tests
describe("The Birthday constructor", function() {

  var birthday = new Birthday("04/02/2008");

  it('creates a new Birthday object', function() {
    expect(birthday).toBeDefined();
    expect(birthday).not.toBe(null);
    expect(birthday).toBeTruthy();
    expect(Object.getPrototypeOf(birthday)).toEqual({});
  });

  it('has a date attribute', function () {
    expect(birthday.date).toBeDefined();
    expect(typeof(birthday.date)).toEqual('string');
    expect(birthday.date.length).toEqual(10);
  });
});

//#getMagicNumber prototype tests
describe("getMagicNumber", function() {

  it("should return the numerology for a birthday", function() {
    var birthday = new Birthday("04/02/2008");
    expect(birthday.getMagicNumber).toEqual(7)
  });

  it("should return the numerology for a birthday", function() {
    var birthday = new Birthday("01/01/1998");
    expect(birthday.getMagicNumber).toEqual(2)
  });

  it("should return the numerology for a birthday", function() {
    var birthday = new Birthday("10/22/1977");
    expect(birthday.getMagicNumber).toEqual(3)
  });

  it("should never return a value greater than 9", function() {

    var birthday = new Birthday("10/22/1977");
    expect(birthday.getMagicNumber).toBeLessThan(3)
  });

});


// In numerology, every number has a certain meaning that expresses someones connection to the universe! This single digit integer can be calculated by adding up every digit in the birthdate: year, month, and date. Each time the sum exceeds 9, add up the 2 digits.
// For example, new Date('06/14/2010') = 5
// So, what is your number?
