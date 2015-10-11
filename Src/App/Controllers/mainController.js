(function(){
	'use strict';
	angular.module('PrimeTables')
	.controller('MainController', ['PrimeNumberGenerator', 'NumberOfPrimesValidation', function(primeNumberGenerator, numberOfPrimesValidation){

		var vm = this;

		vm.drawPrimesTable = function(){
			validateNumber();
			drawMatrix();
		};

		vm.primeIntersection = function(primeX, primeY){
			return primeX * primeY;
		};

		function validateNumber(){
			vm.validationError = numberOfPrimesValidation.getValidationMessage(vm.number);
		}

		function drawMatrix(){
			if(vm.validationError === null){
				vm.primes = primeNumberGenerator.getPrimes(vm.number);
			}
		}

	}]);
})();
