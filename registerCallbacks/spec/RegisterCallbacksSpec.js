describe("RegisterCallbacks", function() {

  describe("registerOperator", function() {
    it("should")
  })

  describe("#registerOperator", function() {
    it("stores a callback in an object", function() {
      let name = "foo";
      let callback = "bar";
      registerOperator(name, callback);
      expect(callbacks[name]).toEqual(callback);
    });
  });

  describe("#lookupOperator", function() {
    it("retrieves a callback by its name", function() {
      let name = "foo";
      let callback = "bar";
      registerOperator(name, callback);
      expect(lookupOperator(name)).toEqual("bar");
    });
  });

  describe("+", function() {
    it("sums arguments", function() {
      let callback = lookupOperator("+");
      expect(callback([1,2,3])).toEqual(6);
    });
  });

  describe("*", function() {
    it("multiplies the arguments", function() {
      let callback = lookupOperator("*");
      expect(callback([1,2,3,10])).toEqual(60);
    });
  });

  describe("/", function() {
    it("divides the arguments", function() {
      let callback = lookupOperator("/");
      expect(callback([10, 5, 2])).toEqual(1);
    });
  });
});