// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
// your program would output 4—the number of ways to make 4¢ with those denominations:

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

class CashRegister {
	constructor() {

	}

	possibleCoinCombinationsOf(amountLeft, denominations, currentIndex) {
		// initialize or keep currentIndex
		currentIndex = currentIndex || 0;
		console.log("CurrentIndex: " + currentIndex)
		// we hit the amount with no remainder so we have one way to make the amount!

		if (amountLeft === 0) { return 1; }
		// we overshot the amount so no way to make it!
		if (amountLeft < 0) return 0;
		// we're out of denominations
		if (currentIndex === denominations.length) return 0;

		console.log("checking ways to make " + amountLeft + " with " + denominations.slice(currentIndex));

		// choose current coin
		let currentCoin = denominations[currentIndex];
		//console.log("current coin: " + currentCoin);

		// see how many possibilities we can get
		// for each number of times to use currentCoin
		let numPossibilities = 0;
		while (amountLeft >= 0) {
			console.log("Amount Left: " + amountLeft) 
			console.log(	"Denominations: " + denominations + ", CurrentIndex: " + currentIndex + ", Number of possibilities: " + numPossibilities);
			numPossibilities += this.possibleCoinCombinationsOf(amountLeft, denominations, currentIndex + 1);
			console.log("Subtracting current coin: " + currentCoin);
			amountLeft -= currentCoin;
		}
		return numPossibilities;
	}
}

const myCashRegister = new CashRegister;
myCashRegister.possibleCoinCombinationsOf(4, [1,2,3]);