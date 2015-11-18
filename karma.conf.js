module.exports = function(config) {
  config.set({
	basePath: '',
  frameworks: ['jasmine'],
	browsers: ['Chrome'],
  reporters: ['progress', 'coverage'],
  files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'Src/App/Modules/*.js',
      'Src/App/Services/*.js',
      'Src/App/Controllers/*.js',
      'Tests/Unit/*Tests.js',
      'Tests/Integration/*Tests.js'
    ],
    preprocessors: {
      'Src/App/**/*.js': ['coverage']
    },
    coverageReporter: {
      type: 'text'
    },
  });
};
