!function(){"use strict";angular.module("PrimeTables",[])}();
!function(){"use strict";angular.module("PrimeTables").service("NumberOfPrimesValidation",function(){this.getValidationMessage=function(e){return isNaN(e)?"Please enter a number":0>=e?"Please enter a number greater than zero":e!=parseInt(e,10)?"Please enter a whole number":null}})}();
!function(){"use strict";angular.module("PrimeTables").service("PrimeNumberGenerator",function(){this.getPrimes=function(e){if(isNaN(e))throw new Error("Invalid argument - only numbers allowed");if(0>e)throw new Error("Invalid argument - only positive whole numbers allowed");return[2,3,5,7,11,13,17,19,23,29].slice(0,e)}})}();
!function(){"use strict";angular.module("PrimeTables").controller("MainController",["PrimeNumberGenerator","NumberOfPrimesValidation",function(r,n){function e(){t.validationError=n.getValidationMessage(t.number)}function i(){null===t.validationError&&(t.primes=r.getPrimes(t.number))}var t=this;t.drawPrimesTable=function(){e(),i()},t.primeIntersection=function(r,n){return r*n}}])}();