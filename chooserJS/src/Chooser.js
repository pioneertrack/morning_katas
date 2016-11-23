class Chooser {
	constructor(population, subset) {
		this.superset = population;
		this.subset = subset;
	}

	combinationsOfKFromN(population, subset) {
		// base case
		if (population == subset || subset == 0) {
			return 1;
		} else {
			return(this.combinationsOfKFromN(population-1, subset-1) + 
			this.combinationsOfKFromN(population-1, subset));
		}		
	}
} 