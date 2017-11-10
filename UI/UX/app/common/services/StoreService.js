/*****************
@Author:GuruPrasad
******************/
(function() {
    'use strict';
    //session Service
    angular.module('app.common').factory('sessionService', sessionService); //Apis constan file

    //Service injection
    sessionService.$inject = ['$window'];

    //Service implementation
    function sessionService($window) {

        return {
            setUserDetails: setUserDetails,
            getUserDetails: getUserDetails,
            setEditEventList: setEditEventList,
            setEditNotificationList: setEditNotificationList,
            getEditEventList: getEditEventList,
            getEditNotificationList: getEditNotificationList,
            clearSession: clearSession,
            setRegisterDetails: setRegisterDetails,
            setViewEventList:setViewEventList,
            getRegisterDetails:getRegisterDetails,
            getViewEventList:getViewEventList,
            setEditAlbumList:setEditAlbumList,
            getEditAlbumList:getEditAlbumList

        };

        //Sets users details   	  
        function setUserDetails(sessionObj) {
           

            $window.sessionStorage.setItem('userData', JSON.stringify(sessionObj));
            

            return true;
        }

        //Gives User Details
        function getUserDetails(returnData) {

            var sessionObj = {
                "userdata": JSON.parse($window.sessionStorage.getItem('userData'))

            };

            if (returnData == "USER") {
                return sessionObj.userdata;
            } else {
                return sessionObj;
            }

        }

        function setRegisterDetails(registerObj) {
            $window.sessionStorage.setItem('registerData', JSON.stringify(registerObj));
          

            return true;
        }

        function getRegisterDetails(returnData) {
            var regObj = {
                "registerdata": JSON.parse($window.sessionStorage.getItem('registerData'))

            };

            if (returnData == "REGISTER") {
                return regObj.registerdata;
            } else {
                return regObj;
            }
        }

        function setEditEventList(data) {

            $window.sessionStorage.setItem('EditEventList', angular.toJson(data));
            
        }

         function setEditNotificationList(data) {

            $window.sessionStorage.setItem('EditNotificationList', angular.toJson(data));
           
        }
         function setViewEventList(data) {

            $window.sessionStorage.setItem('ViewEventList', angular.toJson(data));
           
        }

        function getEditEventList() {
            var returnobj;

            if (!$window.sessionStorage.getItem('EditEventList')) {
                returnobj = {};
            } else {
                returnobj = angular.fromJson($window.sessionStorage.getItem('EditEventList'));
            }

            return returnobj;
        }
         function getViewEventList() {
            var returnobj;

            if (!$window.sessionStorage.getItem('ViewEventList')) {
                returnobj = {};
            } else {
                returnobj = angular.fromJson($window.sessionStorage.getItem('ViewEventList'));
            }

            return returnobj;
        }
         function getEditNotificationList() {
            var returnobj;


            if (!$window.sessionStorage.getItem('EditNotificationList')) {
                returnobj = {};
            } else {
                returnobj = angular.fromJson($window.sessionStorage.getItem('EditNotificationList'));
            }

            return returnobj;
        }


        function setEditAlbumList(data) {

            $window.sessionStorage.setItem('EditAlbumList', angular.toJson(data));
          
        }

        function getEditAlbumList() {
            var returnobj;

            if (!$window.sessionStorage.getItem('EditAlbumList')) {
                returnobj = {};
            } else {
                returnobj = angular.fromJson($window.sessionStorage.getItem('EditAlbumList'));
            }

            return returnobj;
        }


        function clearSession() {
            $window.sessionStorage.clear();
            return;
        }









    } //EOF Service

})();
