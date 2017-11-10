angular.module('app').constant('APIS', {
    LOGIN: {
        URL: 'api/login',
        METHOD: "POST"
    },
    LOGOUT: {
        URL: 'logout',
        METHOD: "GET"
    },
    GET_TOKEN: {
        URL: 'api/register',
        METHOD: "POST"
    },
    GET_REFRESH_TOKEN: {
        URL: 'api/refreshtoken',
        METHOD: "POST"
    },
    GENERATE_REPORT_DATA: {
        URL: 'api/transport/report/confirmation',
        METHOD: "POST"
    },
    FILE_VALIDATE_API: {
        URL: 'api/transport/rostervalidation',
        METHOD: "POST"
    },
    GET_ROSTER_SUMMARY_DATA: {
        URL: 'api/transport/rostersummary',
        METHOD: "POST"
       
    },
    UPLOAD_VALIDATED_FILE: {
        URL: 'api/transport/publishroster',
        METHOD: "POST"
    },
    GET_EMPLOYEE_SUMMARY_DATA: {
        URL: 'api/transport/currentrosterdetails',
        METHOD: "GET",
        TEMPURL: 'api/transport/currentrosterdetails'
    },

    GET_EMPLOYEE_DETAILS_DATA: {
        URL: 'api/employee/search/all',
        METHOD: "POST"

    },
    UPLOAD_EMPLOYEEDATA_FILE: {
        URL: 'api/employee/upload/',
        METHOD: "POST"
    },
    DOWNLOAD_FILE: {
        URL: 'api/download/file/fileid',
        METHOD: "POST",
        TEMPURL: 'api/download/file/fileid'
    },
    GET_EVENT_LIST: {
        URL: 'api/event/search',
        METHOD: "POST"

    },
    GET_EVENT_REC: {
        URL: 'api/event/presearch',
        METHOD: "GET"

    },
    CREATE_EVENT: {
        URL: 'api/event/createevent',
        METHOD: "POST"

    },
    GET_EVENT_TYPE: {
        URL: 'api/event/eventType',
        METHOD: "GET"
    },
    GET_ORGANIZED_BY: {
        URL: 'api/event/organizedby',
        METHOD: "GET"
    },
    DELETE_EVENT: {
        URL: 'api/event/delete',
        METHOD: "POST"
    },
    GET_NOTIFICATION_LIST: {
        URL: 'api/notification/search',
        METHOD: "POST"
    },
    GET_DEFAULT_NOTIFICATION_LIST: {
        URL: 'api/notification/getNotification',
        METHOD: "GET"
    },
    DELETE_NOTIFICATION: {
        URL: 'api/notification/deletenotification',
        METHOD: "POST"
    },
    CREATE_NOTIFICATION: {
        URL: 'api/notification/createnotification',
        METHOD: "POST"
    },
    CREATE_ALBUM: {
        URL: 'api/gallery/album',
        METHOD: "POST"
    },
    DELETE_ALBUM: {
        URL: 'api/gallery/album',
        METHOD: "DELETE"
    },
    GET_ALBUM_LIST: {
        URL: 'api/gallery/album/search',
        METHOD: "POST"

    },
    GET_CATEGORY_LIST: {
        URL: 'api/notification/category',
        METHOD: "GET"
    },
    GET_PRIORITY_LIST: {
        URL: 'api/notification/priority',
        METHOD: "GET"

    },
    GET_CREATED_DATA_FOR_EDIT: {
        URL: 'api/gallery/album',
        METHOD: "GET",
        TEMPURL: 'api/gallery/album'
    },
    EDIT_ALBUM: {
        URL: 'api/gallery/album/update',
        METHOD: "POST"
    },
    GET_LOCATION:{
         URL: 'api/event/businesslocation',
        METHOD: "GET"
    },
    GET_UPLOAD_STATUS:{
       URL: 'api/employee/upoloaded/history',
       METHOD: "GET" 
    },
    DELETE_ROSTER:{
        URL: 'api/roster/delete',
        METHOD: "POST"

    },
    DOWNLOAD_REPORT:{
        URL: 'api/transport/report/download/confirmation',
        METHOD: "POST" 
    },
    GET_ASSOCIATED_EVENT:{
        URL: 'api/event/getalleventslist',
        METHOD: "GET" 
    },
    GET_VIEW_EVENT:{
        URL: 'api/event',
        METHOD: "GET",
        TEMPURL: 'api/event'
    },
    GET_VIEW_ALBUM:{
        URL: 'api/gallery/album/event',
        METHOD: "GET",
        TEMPURL: 'api/gallery/album/event'
    },
    GET_BU_LIST:{
    	URL: 'api/award/allcategory',
        METHOD: "GET",
        TEMPURL: 'api/award/allcategory'
    },
    GET_AWARD_LIST : {
    	URL: 'api/award/getaward',
        METHOD: "GET",
        TEMPURL: 'api/award/getaward'
    },
    GET_AWARD_DETAIL:{
    	URL: 'api/award/details',
        METHOD: "GET",
        TEMPURL: 'api/award/details'
    }
   


});
