/*****************
@Author:GuruPrasad
******************/
(function() {
    'use strict';
    //Data Manager Service: Do Rest call
    angular.module('app.common').factory('dataManagerService', dataManagerService);
    //Service injection
    dataManagerService.$inject = ['$http', '$location', 'CONFIG', '$log', 'sessionService', '$uibModalStack', 'Upload', 'ModalService'];
    //Controller implementation
    function dataManagerService($http, $location, CONFIG, $log, sessionService, $uibModalStack, Upload, ModalService) {
        //Binding   
        return {
            sendRequest: sendRequest,
            sendRequestWithImage: sendRequestWithImage,
            getURL: getURL
        };

        function getURL(restParams) {
            var url = CONFIG.BASE_URL[CONFIG.BASE_URL_MODE] + restParams.URL;
            if (restParams.METHOD === 'GET') {
                if (url.indexOf("?") !== -1) {
                    url += '&hash_id=' + Math.random();
                } else {
                    url += '?hash_id=' + Math.random();
                }
            }

            return url;
        }

        /*Login function*/
        function sendRequest(headers, restParams, token) {
            //Rest Headers
            var requestHeaders = headers ? headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            };


            //Check Token                                       
            if (restParams.URL != 'api/login') {
                if (restParams.URL != 'api/register') {
                    if (sessionService.getUserDetails('USER') == null) {
                        $location.path('/login');
                        return;
                    }
                   
                    token = sessionService.getRegisterDetails('REGISTER').access_token;
                   var acf=sessionService.getUserDetails('USER').acf2Id;
                    var bearer = sessionService.getRegisterDetails('REGISTER').token_type;
                    var acf=sessionService.getUserDetails('USER').acf2Id;
                    requestHeaders['Authorization'] = bearer + token;

                    requestHeaders['Acf2Id'] = acf;


                }
            }
            return $http({
                url: getURL(restParams),
                method: restParams.METHOD,
                headers: requestHeaders,
                data: restParams.data
            }).then(function successCallback(response) {
                //Success Handler
                if (response.data.result == 'SUCCESS' || response.data.code == 'NO_CONTENT') {
                    return response.data;
                } else if (response.data.code == 'EXPECTATION_FAILED' || response.data.code == 'INTERNAL_SERVER_ERROR') {
                    return response.data;
                } else if (response.statusText == 'OK') {
                    return response.data;
                } else {
                    return response.data;
                }
            }, function errorCallback(response) {
                if (response.status == -1) {
                     ModalService.openAlert('alert', 'Error', "Backend Services are not ready.Please try again later.", 'alert');
                    $location.path('/login');
                    
                }else if (response.result == "TOKEN_EXPIRED") {
                    $log.error(response);
                    ModalService.openAlert('alert', 'Error', "Your Session Has Expired. Please login again.", 'alert');
                   $location.path('/login');

                } else if(response.status == 401){
                      ModalService.openAlert('alert', 'Error', "You are not authorized to access.", 'alert');
                }
                /*else if (response.status != -1) {
                    $log.error(response);
                    ModalService.openAlert('alert', 'Error', " " + response.data.message, '', 'alert');
                } else {
                    // ModalService.openAlert('alert', 'Error', 'Internal server error', '', 'alert');
                }*/

            });

        } //EOF 

        //Rest call with Image response
        function sendRequestWithImage(headers, restParams, token) {
            //Check Token  
            var s_token;
            var bearer;
            if (restParams.URL != 'api/login') {
                if (sessionService.getUserDetails('USER') == null) {
                    // $uibModalStack.dismissAll();
                    $location.path('/login');
                    return;
                }
                var acf=sessionService.getUserDetails('USER').acf2Id;
                s_token = sessionService.getRegisterDetails('REGISTER').access_token;
                bearer = sessionService.getRegisterDetails('REGISTER').token_type;
                var acf=sessionService.getUserDetails('USER').acf2Id;
            }

            var temp = Upload.json(restParams.data.obj);
            if (restParams.data.file === null) {
                delete restParams.data['file'];
            }
            return Upload.upload({
                url: CONFIG.BASE_URL[CONFIG.BASE_URL_MODE] + restParams.URL,
                data: {
                    file: restParams.data.file,
                    "body": temp
                },
                headers: {
                    'Authorization': bearer + s_token,
                    'Acf2Id':acf
                }
            }).then(function(response) {
               
                return response;
            }, function(response) {
               
                if (response.status == 401 || response.status == -1) {
                     ModalService.openAlert('alert', 'Error', "Your Session has Expired. Please login again.", 'alert');
                   
                    $location.path('/login');
                    // });

                } else if (response.status != -1) {
                    $log.error(response);
                    ModalService.openAlert('alert', 'Error', " " + response.data.message, '', 'alert');
                } 
                else {
                    // ModalService.openAlert('alert', 'Error', 'Internal server error', '', 'alert');
                }
            });

        }
    } //EOF DMS

    angular.module('app.common').config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push(['$q', '$location', '$injector',function($q, $location, $injector) {
            return {
                'request': function(config) {
                    //do stuff
                    $("#preloader").show();
                    return config;
                },
                'requestError': function(rejection) {
                    return $q.reject(rejection);
                },
                'response': function(response) {
                    $("#preloader").fadeOut("slow");
                    return response;
                },
                'responseError': function(rejection) {
                    var ModalService = $injector.get('ModalService');
                    //for session timeout redirect user to login page
                   
                   
                    return $q.reject(rejection);
                }
            }
            
        }]);

    }]);

})();
