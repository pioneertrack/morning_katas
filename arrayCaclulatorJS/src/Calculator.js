class Calculator {

	constructor(arr) {
		this.array = arr;
	}

	// keep track of min prices
	// keep track of best answer so far - max profit - and compare with potential profit for each sell
	// get_max_profit(stock_prices_yesterday)

	getMaxProfit(stockPricesYesterday) {
		if (Array.isArray(stockPricesYesterday === false)) {
			throw new Error("This function only accepts array arguments");
		}
		let minPrice = stockPricesYesterday[0];
		let maxProfit = stockPricesYesterday[1] - minPrice;

		for (var i=1; i < stockPricesYesterday.length; i++) {
			let potentialProfit = stockPricesYesterday[i] - minPrice;
			maxProfit = Math.max(potentialProfit, maxProfit);
			minPrice = Math.min(stockPricesYesterday[i], minPrice);
		}
		return maxProfit;
	}

	// example use of recursion to handle sum numbers in multi-dimensional array
	// sumNumbers(arr) {

	sumNumbers(arr) {
		if (Array.isArray(arr) === false) {
			throw new Error("This function only accepts array arguments");
		}
		let sum = 0;
		arr.forEach(num => {
			if (typeof num == "number") {
				sum += num;
			} else if (typeof num == "object") {
				sum += this.sumNumbers(num);
			} else { sum; }
		});
		return sum;
	}
	
	uniqueValues(arr) {
		let uniques = [];
		arr.forEach(i => {
			let exists = false;
			uniques.forEach(j => {
				if (i == j) exists = true;
			});
			if (exists === false) uniques.push(i);
		});
		return uniques;
	}
}

Calculator;
