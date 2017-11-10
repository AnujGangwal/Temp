angular.module('app')

.constant('CONFIG', {
BASE_URL_MODE: ['DEV'],
    BASE_URL: {

       DEV: "http://172.27.52.206:8081/",
       Shivpal: "http://172.27.17.2:8081/",
       Dharam:"http://172.27.64.2:8084/",
       kk:"http://172.27.11.42:8081/",
       Saloni:"http://172.27.10.46:8081/"

      
    },

    IMAGE_CONFIG: {
        IMAGE_NAME: "NoImage.jpg",
        IMAGE_URL: "UX/img/",
        IMAGE_SIZE: "500KB",
        IMAGE_EXTENSION: [".jpg", ".jpeg", ".png"],
        IMAGE_EXT: 'http://172.27.11.42:8081/files'
    },
     PAGINATION: {
        DEFAULT_NO_ROWS: 15,
        SHOW_NO_OF_ROWS: [15, 50, 100, 200, 500],
        START_ROW_COUNT: 1
    },
   
    SYSTEM_DATE_FORMAT: {
        DATE_FORMAT: "dd-MM-yyyy",
        DATE_YEAR_FORMAT: "yyyy-MM-dd",
        DATE_TIME_FORMAT: "dd-MM-yyyy h:mm a",
        TIME_FORMAT:"HH:mm",
        NOTIFY_TIME_FORMAT:"HH:mm:ss a",
        PAGE_DATE:"yyyy-MM-dd HH:mm:ss Z",
        GRID_DATE_FORMAT: "date:\'dd-MM-yyyy\'"
    },
    SYSTEM_ALERT: {
        DISPLAY_TIME: 15000
    },
    
    ROSTER_FILE_STATUS: {
        "Fail": "FAIL",
        "Success": "SUCCESS",
        "inProgress": "IN_PROGRESS"
    },
    NOTIFICATION_PRIORITY: {
        High: 'High',
        Medium: 'Medium',
        Low: 'Low',
        
    },
    EVENT_STATUS: {
        EXPIRED: 'EXPIRED',
        ACTIVE: 'ACTIVE',
        UPCOMING: 'UPCOMING',
        
    },
     EMPLOYEE_FILE_STATUS: {
        FAIL: 'FAILURE',
        SUCCESS: 'SUCCESS',
        INPROGRESS: 'IN_PROGRESS',
        
    },
    ALBUM_STATUS: {
        PUBLISHED: 'PUBLISHED',
        TO_BE_PUBLISHED: 'TO_BE_PUBLISHED'
       
        
    },
    NOTIFICATION_STATUS: {
        EXPIRED: 'EXPIRED',
        ACTIVE: 'ACTIVE',
        UPCOMING: 'UPCOMING',
        
    }
   
  
    
   


    
    

    
 

});
