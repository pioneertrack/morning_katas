describe("Chooser", function() {
	beforeEach(function() {
		chooser = new Chooser();
	});

	describe("#combinationsOfKFromN", function() {
		it("should return all the possible combinations of subset k from population n", function() {
			expect(chooser.combinationsOfKFromN(6,3)).toEqual(42);
		})
	})
})