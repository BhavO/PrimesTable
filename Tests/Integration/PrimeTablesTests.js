describe('MainController', function() {

  beforeEach(module('PrimeTables'));

  var mainController;

  beforeEach(inject(function(_$controller_){
    mainController = _$controller_('MainController')
  }));

  it("when drawPrimesTable() is called and number is set to 1 primes model should contain [2]", function(){
    //var controller = $controller('MainController');
    mainController.number = 1;
    mainController.drawPrimesTable();
    expect(mainController.primes).toEqual([2]);
  });

  it("when drawPrimesTable() is called and number is set to 11 primes model should contain the first 10 prime numbers", function(){
    //var controller = $controller('MainController');
    mainController.number = 11;
    mainController.drawPrimesTable();
    expect(mainController.primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it("when drawPrimesTable() is called and number is set to 1, error message should be null'", function(){
    mainController.number = 1;
    mainController.drawPrimesTable();
    expect(mainController.validationError).toEqual(null);
  });

  it("when drawPrimesTable() is called and number is set to 0, error message should be null'", function(){
    mainController.number = 0;
    mainController.drawPrimesTable();
    expect(mainController.validationError).toEqual('Please enter a number greater than zero');
  });

  it("primeIntersection() when passed two primes should return the product of the primes'", function(){
    expect(mainController.primeIntersection(2, 3)).toEqual(6);
  });

});
