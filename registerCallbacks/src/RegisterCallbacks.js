	
	var callbacks = {};

	function registerOperator(name, callback) {
		callbacks[name] = callback;
	}

	function lookupOperator(name) {
		return callbacks[name];
	}

	registerOperator("+", function(inputVals) {
		let sum = 0;
		inputVals.forEach(v => sum += parseInt(v));
		return sum;
	});

	registerOperator("*", function(inputVals) {
		let product = 1;
		inputVals.forEach(v => product *= parseInt(v));
		return product;
	});

	registerOperator("/", function(inputVals) {
		let quotient = inputVals[0];
		inputVals.forEach((v, i) => {
			if (i > 0) { quotient /= parseInt(v); }
		});
		return quotient;
	});

	$(document).ready(function() {
    $('.calc button').click(function() {
      $parent = $(this).parent();
      console.log("PARENT" + parent);
      inputVals = $parent.find('input').map(function() {
        return Array.from($(this).val());
      });

      let operator = lookupOperator($(this).html());
      let output = operator(inputVals);

      $parent.find('.output').html(output);
    })
  })