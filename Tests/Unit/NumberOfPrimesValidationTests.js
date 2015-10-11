(function(){
	'use strict';
	describe("NumberOfPrimesValidation", function(){

		beforeEach(module('PrimeTables'));

		var numberOfPrimesValidation;

		beforeEach(inject(function(_NumberOfPrimesValidation_){
			numberOfPrimesValidation = _NumberOfPrimesValidation_;
		}));

		it("getValidationMessage() when passed a non numeric argument 'Please enter a number' ", function(){
			expect(numberOfPrimesValidation.getValidationMessage(undefined)).toEqual("Please enter a number");
			expect(numberOfPrimesValidation.getValidationMessage("abc")).toEqual("Please enter a number");
		});

		it("getValidationMessage() when passed zero should return 'Please enter a number greater than zero' ", function(){
			expect(numberOfPrimesValidation.getValidationMessage(0)).toEqual('Please enter a number greater than zero');
		});

		it("getValidationMessage() when passed negative number should return 'Please enter a number greater than zero'", function(){
			expect(numberOfPrimesValidation.getValidationMessage(-1)).toEqual('Please enter a number greater than zero');
		});

		it("getValidationMessage() when passed a decimal number should return 'Please enter a whole number'", function(){
			expect(numberOfPrimesValidation.getValidationMessage(1.2)).toEqual('Please enter a whole number');
		});

	});
})();
