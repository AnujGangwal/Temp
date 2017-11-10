angular.module('app')
  .constant('ERROR', {
 SSS_ERROR_MGS :{
    WAREHOUSE_AVL:'There is no warehouse available',
    POS_AVL:'There is no POS available',
    SUBDSTRC_AVL:'There is no subdistrict available',
   	POS_LIST:'Please select atleast one POS',   
   	DSTRC_AVL:'There is no district available',
    ITEM_CANNOT_ADDED:'One item cannot be added twice in same order',
    ITEM_ADDED:'Item added successfully' ,
    ITEM_LIST:' Atleast select one item '    
    },
REPORTS_ERROR :{
       WAREHOUSE_NOT_AVAILABLE:"There is no warehouse available",
       WAREHOUSE_NAME_REQUIRED:"Select Warehouse Name",
       CATEGORY_NAME_REQUIRED:"Category Name Required",
    },
SDM_ERROR_MGS :{
    COURIER_NOT_AVL:'Courier does not exist for this city',
    INTERNAL_COURIER_EXIST:'Internal courier already exists, Please inactivate existing internal courier first',
    DEPT_DETAIL_NOT_EXITST:'Department detail does not exist for this city',
    OVERRIDE_INTERNAL_COURIER:'This action will inactive any other existing active courier, Please confirm',
    SELECT_POS:'Please select atleast one POS',
    SELECT_COURIER_TYPE:'Please select courier Type',
    SELECT_COURIER_NAME:'Please Select Courier Name',
    SELECT_DRIVER_NAME:'Please Select Driver Name',
    SELECT_MAPPING_TYPE:'Please Select Mapping Type',
    INVALID_LDAP: 'Invalid ldap id'
    } ,
REPORT_MGS :{
    DATA_NOT_AVL:'Data not available'     
    },

ORDER_ERROR_MSG:{
      ORDER_LIST:'Please select atleast one Order',
      POS_LIST:'Please select atleast one POS',
      CHANGE_ORDER:'Do you want to change order type?',
      CHANGE_WAREHOUSE:'Source and Destination Warehouse Cannot be same',
      CHANGE_POS:'Source and Destination POS Cannot be same',
      CART_ITEM:'Add atleast one item in the cart',
      ITEM_LIST_NOTE:'Please fill all the Item Notes.',
      EDITOR_MSG:'Editor cannot be empty.',
      DELETE_CMS:'Do you want to delete the page?'
    },

WAREHOUSE_ERROR_MSG:{
      JSON_LOAD_FAILED:'Data json load failed',
      OVERRIDE_WAREHOUSE:'Choosing this as default will override the existing default Warehouse'
    },                

INVENTORY_MSG:{
      QTY_MSG:'Please enter atleast one quantity',
      POPUP_MGS:'Do you want to reset the item list?'
    }

  	});