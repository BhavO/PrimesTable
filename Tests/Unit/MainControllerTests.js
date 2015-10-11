(function(){
	'use strict';
	describe("MainController", function(){

		beforeEach(module('PrimeTables'));
		var mainController, numberOfPrimesValidationMock, primeNumberGeneratorMock;

		beforeEach(function(){
			// primeNumberGeneratorMock = spy.
			numberOfPrimesValidationMock = {
				getValidationMessage : function(number){
					if(number <= 0){
						return "stub error message";
					}
					return null;
				}
			};

			primeNumberGeneratorMock = {
				getPrimes : function(n){
					return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29].slice(0, n);
				}
			};

			module(function ($provide) {
					$provide.value('PrimeNumberGenerator', primeNumberGeneratorMock);
					$provide.value('NumberOfPrimesValidation', numberOfPrimesValidationMock);
			});
		});

		beforeEach(inject(function(_$controller_){
			mainController = _$controller_('MainController');
		}));

		it("when passed the number 1, primes should be [2]'", function(){
			mainController.number = 1;
			mainController.drawPrimesTable();
			expect(mainController.primes).toEqual([2]);
		});

		it("should call getPrimes when drawPrimesTable() is called'", function(){
			spyOn(primeNumberGeneratorMock, "getPrimes");
			mainController.number = 1;
			mainController.drawPrimesTable();
			expect(primeNumberGeneratorMock.getPrimes).toHaveBeenCalled();
		});

		it("when passed the number 2, primes should be [2, 3]'", function(){
			mainController.number = 2;
			mainController.drawPrimesTable();
			expect(mainController.primes).toEqual([2, 3]);
		});

		it("when passed the number 11, primes should be [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]'", function(){
			mainController.number = 11;
			mainController.drawPrimesTable();
			expect(mainController.primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
		});

		it("when passed the number 1, validation error should be null'", function(){
			mainController.number = 1;
			mainController.drawPrimesTable();
			expect(mainController.validationError).toEqual(null);
		});

		it("should call getValidationMessage when drawPrimesTable() is called'", function(){
			spyOn(numberOfPrimesValidationMock, "getValidationMessage");
			mainController.number = 1;
			mainController.drawPrimesTable();
			expect(numberOfPrimesValidationMock.getValidationMessage).toHaveBeenCalled();
		});

		it("when passed the number 0, validation error should be 'stub error message'", function(){
			mainController.number = 0;
			mainController.drawPrimesTable();
			expect(mainController.validationError).toEqual("stub error message");
		});

		it("primeIntersection() when passed two primes should return the product of the primes'", function(){
			expect(mainController.primeIntersection(2, 3)).toEqual(6);
		});

	});
})();
