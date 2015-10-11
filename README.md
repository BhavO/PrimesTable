# Primes Table
Web app that generates a multiplication table of prime numbers.

## How to run it
### Run
Open /Dist/index.html in your favourite browser.

### Develop
Prerequisites node/npm

##### Get dependencies and install tools
1. Open command prompt in project directory
2. npm update
3. npm install gulp protractor -g

##### Build
Gulp is used to manage development tasks, run the below tasks for your desired activity, the build output directory is /Dist:

- gulp build (build source and run tests)
- gulp watch (build when files have changed)
- gulp test (run tests and re-run on file change)
- gulp testrun (run tests headless)

##### Acceptance Tests
1. Open command prompt and enter: webdriver-manager start
2. Open another command prompt in project directory
3. protractor /Tests/Acceptance/conf.js

## What I'm pleased with
- Clean separation of concerns and responsibilities.
- Very simple and minimalist implementation, easy to understand and change.
- Very good test coverage.
- Code analysis/style, testing, test coverage reporting, bundling and minification all included into build pipeline.
- Easily scalable as computation is not centralised but distributed among users, prime number generation can easily be switched call into a server side/coud service if needed.
- Very flexible UI design as its just plain html/css.

## What I would do with it if I had more time
- Incorporate acceptance test run with build, unit and integration, coverage are already.
- Include JSCS
- Refactor view model for matrix intersection to not require input
- Split error message into separate resource file
- Make use of angular validation plugins and/or html5 input validation.

## Notes
The requirement for only the first 10 primes numbers has meant I have done what is minimally needed to meet the acceptance criteria, I have implemented the prime number generation as a simple slice of the first 10 primes, a full blown prime number algorithm would be overkill when it is not required, this means we deliver maximum value with minimal effort and complexity.
