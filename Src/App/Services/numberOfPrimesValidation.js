(function(){
	'use strict';
	angular.module('PrimeTables')
	.service('NumberOfPrimesValidation', function(){
		this.getValidationMessage = function(number) {

			if(isNaN(number)){
				return "Please enter a number";
			}

			if(number <= 0){
				return "Please enter a number greater than zero";
			}

			if(number != parseInt(number, 10)){
				return "Please enter a whole number";
			}

			return null;
		};
	});
})();
