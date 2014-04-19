// Dictionary constructor tests
describe("The Dictionary contructor", function() {
  var dictionary = new Dictionary(evil, dead, rabbit, zombies);

  it('creates a new Dictionary object', function() {
    expect(dictionary).toBeDefined();
    expect(dictionary).not.toBe(null);
  });

  it('returns an array of words', function() {
    expect(dictionary).toContain('dead');
    expect(dictionary).not.toContain('Dolly Parton');
    expect(dictionary.length).toEqual(4);
    expect(birthday.pop).toBeDefined();
  });

  it('should respond to proper methods', function() {
    expect(dictionary.first).toBeDefined();
    expect(dictionary.first).toEqual('evil');
  });
});


// #validWord method tests
describe("#validWord", function() {

  it("should return true if a given a string is comprised of one or more words form the dictionary", function() {
    var dictionary = new Dictionary(evil, dead, rabbit, zombies);
    expect(dictionary.validWord('evildead')).toBe(true);
  });

  it("should return false if a string is not comprised of a word from the dictionary", function () {
    var dictionary = new Dictionary(evil, dead, rabbit, zombies);
    expect(dictionary.validWord('Dolly Parton')).toBe(false);
  });
});
