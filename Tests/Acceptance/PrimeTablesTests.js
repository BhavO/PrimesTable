describe('Prime Tables', function() {
  beforeEach(function(){
    browser.get('');
  });

  it('Should display a multiplication matrix of the first 3 primes when the number 3 is entered', function() {
    element(by.model('vm.number')).sendKeys('3');
    var primesTable = element.all(by.css('row')).getText();
    expect(primesTable).toEqual(['235', '2 4610', '3 6915', '5 101525']);
  });

  it('Should display a multiplication matrix of the first 10 primes when the number 11 is entered', function() {
    element(by.model('vm.number')).sendKeys('11');
    var primesTable = element.all(by.css('row')).getText();
    expect(primesTable).toEqual([ '2357111317192329', '2 461014222634384658', '3 691521333951576987', '5 1015253555658595115145', '7 142135497791119133161203', '11 22335577121143187209253319', '13 26396591143169221247299377', '17 345185119187221289323391493', '19 385795133209247323361437551', '23 4669115161253299391437529667', '29 5887145203319377493551667841' ]);
  });

  it('Should prompt the user with "Please enter a number" when entering "abc"', function() {
    element(by.model('vm.number')).sendKeys('abc');
    var validationError = element(by.css('.validation')).getText();
    expect(validationError).toEqual('Please enter a number');
  });

  it('Should prompt the user with "Please enter a whole number" when entering "1.2"', function() {
    element(by.model('vm.number')).sendKeys('1.2');
    var validationError = element(by.css('.validation')).getText();
    expect(validationError).toEqual('Please enter a whole number');
  });

  it('Should prompt the user with "Please enter a number greater than zero" when entering "0"', function() {
    element(by.model('vm.number')).sendKeys('0');
    var validationError = element(by.css('.validation')).getText();
    expect(validationError).toEqual('Please enter a number greater than zero');
  });

  it('Should prompt the user with "Please enter a number greater than zero" when entering "-1"', function() {
    element(by.model('vm.number')).sendKeys('-1');
    var validationError = element(by.css('.validation')).getText();
    expect(validationError).toEqual('Please enter a number greater than zero');
  });

});
