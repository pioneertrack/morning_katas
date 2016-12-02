	
	var callbacks = {};

	function registerOperator(name, callback) {
		callbacks[name] = callback;
	}

	function lookupOperator(name) {
		return callbacks[name];
	}

	registerOperator("+", function(inputVals) {
		let sum = 0;
		Array.prototype.forEach.call(inputVals, function(el) { 
			sum += parseInt(el);
		});
		return sum;
	});

	registerOperator("*", function(inputVals) {
		let product = 1;
		Array.prototype.forEach.call(inputVals, function(el) { 
			product *= parseInt(el);
		});
		return product;
	});

	registerOperator("/", function(inputVals) {
		let quotient = inputVals[0];
		Array.prototype.forEach.call(inputVals, function(el, i) {
			if (i > 0) { quotient /= parseInt(el);}
		});
		return quotient;
	});

	$(document).ready(function() {
    $('.calc button').click(function() {
      $parent = $(this).parent();
      console.log("PARENT" + parent);
      inputVals = $parent.find('input').map(function() {
        return $(this).val();
      });

      let operator = lookupOperator($(this).html());
      let output = operator(inputVals);

      $parent.find('.output').html(output);
    })
  })