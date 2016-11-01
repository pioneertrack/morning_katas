class Calculator {

	constructor(arr) {
		this.array = arr;
	}

	// keep track of min prices
	// keep track of best answer so far - max profit - and compare with potential profit for each sell
	// get_max_profit(stock_prices_yesterday)
	getMaxProfit(stockPricesYesterday) {
		let minPrice = stockPricesYesterday[0];
		let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

		for (var i = 1; i < stockPricesYesterday.length; i++) {
			let potentialProfit = stockPricesYesterday[i] - minPrice;

			maxProfit = Math.max(...[maxProfit, potentialProfit]);

			minPrice = Math.min(...[minPrice, stockPricesYesterday[i]]); // reset last
		}
		return maxProfit;
	}

	// example use of recursion to handle sum numbers in multi-dimensional array
	sumNumbers(arr) {
		if (Array.isArray(arr) == false) {
			throw new Error("This function only accepts array arguments");
		}
		var sum = 0;
		for (var i = 0; i < arr.length; i++) {
			var type = typeof(arr[i]);
			if (type == "number") {
				sum += arr[i];
			} else if (type == "object") {
				sum += this.sumNumbers(arr[i]);
			} else {
				sum += 0;
			}
		}
		return sum;
	}

	uniqueValues(arr) {
		// iterate over arr & uniques array
		// if uniques doesn't include current arr value, push in array
		var uniquesSoFar = [];
		for (var i = 0; i < arr.length; i++) {
			var exists = false; // set flag to false for each el in arr
			for (var j = 0; j < uniquesSoFar.length; j++) {
				if (uniquesSoFar[j] == arr[i]) {
					exists = true;
				}
			}
			if (exists == false) {
				uniquesSoFar.push(arr[i]);
			}
		}
		return uniquesSoFar;
	}

}

Calculator;
