angular.module('app.common', []);
angular.module('app.login', []);
 
angular.module('app', ['ui.router', 'app.common', 'app.login','ui.bootstrap','angularUtils.directives.dirPagination']).config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $stateProvider.state('landing', {
            url: '/landing',
            controller: 'LoginCtrl as login',
            templateUrl: 'UX/app/login/partials/login.html'
        });
    $urlRouterProvider.otherwise('/landing');


}]).controller('MainController', ['$scope', '$rootScope', '$location', 'sessionService', function($scope, $rootScope, $location, sessionService) {

}]).run(function($rootScope, $state, $interval, $location, sessionService, $timeout, APIS) {

    var registerData = sessionService.getRegisterDetails('REGISTER');
    if (registerData) {
        $timeout(function() {
        
        }, registerData.expires_in);
    }
    $rootScope.validateForm = function(forms) {
        var flag = true;
        angular.forEach(forms, function(form) {
            if (form.$invalid) {
                flag = false;
                angular.forEach(form.$error, function(field) {
                    angular.forEach(field, function(errorField) {
                        errorField.$setTouched();
                    })
                });
            }
        })
        return flag;
    }

});
