angular.module('app')
    .filter('ngPatternRegex', function(ngPatternValidation) {


        return function(input) {
            return ngPatternValidation.REGEX[input];

        }

    });


angular.module('app')
    .filter('ngPatternMsg', function(ngPatternValidation) {


        return function(input) {
            return ngPatternValidation.ERROR_MSG[input];

        }

    });
