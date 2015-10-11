(function(){
	'use strict';
	describe("PrimeNumberGeneratorTests", function(){

		beforeEach(module('PrimeTables'));

		var primeNumberGenerator;

		beforeEach(inject(function(_PrimeNumberGenerator_){
				primeNumberGenerator = _PrimeNumberGenerator_;
		}));

		it("getPrimes() when passed 1 should return an array containing the prime 2'", function(){
			expect(primeNumberGenerator.getPrimes(1)).toEqual([2]);
		});

		it("getPrimes() when passed 0 should return an empty array'", function(){
			expect(primeNumberGenerator.getPrimes(0)).toEqual([]);
		});

		it("getPrimes() when passed a number greater than 10 it should return an array containing the first 10 primes'", function(){
			expect(primeNumberGenerator.getPrimes(11)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
		});

		it("getPrimes() when passed a negative number should throw argument exception'", function(){
			expect(function(){ primeNumberGenerator.getPrimes(-1) }).toThrow(new Error("Invalid argument - only positive whole numbers allowed"));
		});

		it("getPrimes() when passed a string should throw argument exception'", function(){
			expect(function(){ primeNumberGenerator.getPrimes("abc") }).toThrow(new Error("Invalid argument - only numbers allowed"));
		});

		it("getPrimes() when passed a negative number should throw argument exception'", function(){
			expect(function(){ primeNumberGenerator.getPrimes(-1) }).toThrow(new Error("Invalid argument - only positive whole numbers allowed"));
		});

	});
})();
