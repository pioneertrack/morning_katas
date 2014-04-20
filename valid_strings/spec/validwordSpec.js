// Dictionary constructor tests
describe("The Dictionary constructor", function() {

  var dictionary; 

  beforeEach(function() {
    dictionary = new Dictionary(['evil', 'dead', 'rabbit', 'zombies']);
  });

  it('creates a new Dictionary object', function() {
    expect(dictionary).toBeDefined();
    expect(dictionary).not.toBe(null);
  });

  it('should respond to proper methods', function() {
    expect(dictionary.content).toContain('dead');
    expect(dictionary.content).not.toContain('Dolly Parton');
    expect(dictionary.content.length).toEqual(4);
    expect(dictionary.content.pop).toBeDefined();
  });

  it('should respond to proper methods', function() {
    expect(dictionary.first).toBeDefined();
    expect(dictionary.first).toEqual('evil');
  });
});


// #validWord method tests
describe("#validWord", function() {

  // var dictionary; 

  // beforeEach(function() {
  //   dictionary = new Dictionary(['evil', 'dead', 'rabbit', 'zombies']);
  // });

  // it("should return true if a given a string is comprised of one or more words form the dictionary", function() {
  //   expect(dictionary.validWord('evildead')).toBe(true);
  // });

  // it("should return true if a given a string is comprised of one or more words form the dictionary", function() {
  //   expect(dictionary.validWord('dead')).toBe(true);
  // });

  // it("should return true if a given a string is comprised of one or more words form the dictionary", function() {
  //   expect(dictionary.validWord('evilzombies')).toBe(true);
  // });

  // it("should return true if a given a string is comprised of one or more words form the dictionary", function() {
  //   expect(dictionary.validWord('rabbitzombies')).toBe(true);
  // });

  // it("should return false if a string is not comprised of a word from the dictionary", function () {
  //   expect(dictionary.validWord('DollyParton')).toBe(false);
  // });

  // // "out-of-order words"
  // it("should return true if a string is contains of a word from the dictionary", function () {
  //   dictionary = new Dictionary(['wars', 'code']);
  //   expect(dictionary.validWord('codewars')).toBe(true);
  // });

  // // repetition in string
  // it("should return true if a string contains a word from the dictionary", function () {
  //   dictionary = new Dictionary(['code', 'wars']);
  //   expect(dictionary.validWord('codecodewars')).toBe(true);
  // });

  // overlapping words
  // it("should return false if a string contains a word made up of overlapping dictionary entries", function () {
  //   dictionary = new Dictionary(['cod', 'dewa', 'ars']);
  //   expect(dictionary.validWord('codewars')).toBe(false);
  // });

  //overlapping AND discreet
  it("should return true if a string is comprised of both overlapping and discreet words", function () {
    dictionary = new Dictionary(['foob', 'bar', 'foo']);
    expect(dictionary.validWord('foobar')).toBe(true);
  });
});
