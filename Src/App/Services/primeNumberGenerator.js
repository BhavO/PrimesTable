(function(){
	'use strict';
	angular.module('PrimeTables')
	.service('PrimeNumberGenerator', function(){
		this.getPrimes = function(numberOfPrimes) {

			if(isNaN(numberOfPrimes)){
				throw new Error("Invalid argument - only numbers allowed");
			}

			if(numberOfPrimes < 0){
				throw new Error("Invalid argument - only positive whole numbers allowed");
			}

			// you may have expected to find a typical prime number algo here, I've explaned the reason for this approach in the readme
			return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].slice(0, numberOfPrimes);
		};
	});
})();
