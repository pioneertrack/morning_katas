// Dictionary constructor tests

describe("The Dictionary contructor"), function() {
  var dictionary = new Dictionary(evil, dead, rabbit, zombies);

  it('creates a new Dictionary object', function() {
    expect(dictionary).toBeDefined();
    expect(dictionary).not.toBe(null);
    expect(birthday.pop).toBeDefined();
    expect(birthday.length).toEqual(4);
  });

  it('should respond to proper methods', function() {
    expect(dictionary.first).toBeDefined();
    expect(dictionary.first).toEqual('evil');
  });
});