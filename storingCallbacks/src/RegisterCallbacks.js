	
	var callbacks = {};

	function registerOperator(name, callback) {
		callbacks[name] = callback;
	}

	function lookupOperator(name) {
		return callbacks[name];
	}

	registerOperator('+', function(a, b) {
		return parseInt(a) + parseInt(b);
	});

	registerOperator('*', function(a, b) {
		return parseInt(a) * parseInt(b);
	})

	$(document).ready(function() {
		$('.calc button').click(function() {
		
			var parent = $(this).parent();
			console.log("PARENT" + parent);
			debugger
			var int1 = $(parent).find('.num_input1').val();
			var int2 = $(parent).find('.num_input2').val();
			var plus = lookupOperator('+');
			console.log("PLUS " + plus);
			sum = plus(int1, int2);
			$(parent).find('.sum').html(sum);
		});
	});