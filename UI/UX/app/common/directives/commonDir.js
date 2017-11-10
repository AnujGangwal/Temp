angular.module('app.common').directive('appHeader', function( sessionService, $location) {
        var controller = function(sessionService,$location) {
            var vm = this;
            vm.userdata = sessionService.getUserDetails('USER');
            vm.user = sessionService.getRegisterDetails('REGISTER');
            
            if (!vm.userdata) {


                sessionService.clearSession();
               /* $location.path("/login");*/
            }

            vm.logoutUser = function() {

                /*dataManagerService.sendRequest(null, APIS.LOGOUT, vm.userdata.token).then(function(data) {
                    sessionService.clearSession();
                    $location.path('/login');
                });*/
               
                sessionService.clearSession();
                /* $location.path("/login");*/

            };
           

        };
        return {
            
            templateUrl: "UX/app/common/partials/header.html",
            link: function(scope, elem, attrs, controller) {},
            controller: controller,
            controllerAs: 'headers',
        };
    }).directive('footerPage', function() {
        return {
            restrict: 'AE',

            templateUrl: "UX/app/common/partials/footer.html"
        };
    }).directive('multi', function() {
        return {
            restrict: 'AE',
            link: function(scope, elem, attrs, controller) {
                scope.$watch(function() {
                    elem.multiselect('rebuild');
                }, function() {
                    elem.multiselect('rebuild');
                });
                elem.multiselect({includeSelectAllOption: true});
            }
        };
    })
    /*.directive('header', function() {
        return {
            restrict: 'AE',

            templateUrl: "UX/app/common/partials/header.html"
        };
    })*/
    .directive('loginPage', function() {
        return {
            restrict: 'AE',

            templateUrl: "UX/app/login/partials/login.html"
        };
    }).directive('uibModalWindow', function() {
        return {
            restrict: 'EA',
            link: function(scope, element) {
                element.draggable({
                    handle: '.modal-header, .modal-footer'
                });
            }
        }
    }).directive('fileModel', ['$parse', function($parse) {
        return {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function() {
                    scope.$apply(function() {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);
