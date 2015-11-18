exports.config = {

  baseUrl: '',

  onPrepare: function() {
      browser.resetUrl = 'file://' + __dirname + '/../../Dist/index.html';
  },

  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['PrimeTablesTests.js']
};
