(function() {
    'use strict';

    angular.module('app.login').controller('LoginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location', '$uibModal'];

    //Controller implementation
    function loginCtrl( $location, $uibModal ) {
        var vm = this;
        vm.click =false;
        vm.topData= "Fingerstache green juice semiotics quinoa, truffaut letterpress wolf photo booth ugh biodiesel mumblecore brunch. Meh austin vinyl banh mi, gluten-free chill-wave scenester kombucha street art. Before they sold out lumbersexual chillwave, cold-pressed mumblecore beard pickled letterpress normcore crucifix."
        vm.groups = [{
            id:'1',
            title:'Is my jewelry valuable enough to insure?',
            value:'That’s a very personal decision. Since you’re here, we assume you value your jewelry enough to worry about something happening to it. We think that’s prudent – that very mindset is why we created Digit. For most people, purchasing insurance through Digit will cost only 1-2% of the value of the their insured jewelry, though we do have a minimum premium of $50.'
        },{
            id:'2',
            title:'What is covered when I insure through Digit? What isn’t?',
            value:'Our policy is an “all risk” policy, meaning that everything is covered unless it is expressly excluded. There aren’t many exclusions. Any form of loss, damage, theft, or ‘mysterious disappearance’ is covered anywhere in the world.'
        },{
            id:'3',
            title:'If I give jewelry as a gift, such as an engagement ring, is it insured?',
            value:'Yes. In your application, please be sure to tell us whom the gift is to. As long as the policy remains in force and that person owns the gift, it is insured. Should they ever give it to another person or sell it, however, coverage would stop.'
        },{
            id:'4',
            title:'Does my policy cover newly purchased jewelry?',
            value:'Yes, though there are some limitations until you add your new jewelry to your policy. Coverage for newly purchased jewelry lasts up to 30 days or until your policy expires, whichever is earlier. And the limit to what will be paid for a loss on newly purchased jewelry is the lesser of: the cost to repair, replace, or rebuild the lost item with materials of like kind and quality; 25% of the value of the jewelry insured on your policy; or $10,000.'
        },{
            id:'5',
            title:'Do you offer coverage for jewelry that isn’t valuable enough to appraise?',
            value:'Provided you have at least one item “scheduled” (meaning all details on that item including an appraisal have been included in your application) on a policy through Digit, you may also purchase “unscheduled” coverage. Unscheduled coverage does not require an appraisal. It is limited to $1,000 per item up to a total of $5,000 per policy. Other limitations apply, including a flat $100 deductible. Please contact us for additional details.'
        },{
            id:'6',
            title:'I have a homeowner’s / renter’s policy, isn’t my jewelry covered?',
            value:'Jewelry coverage under a homeowner’s or renter’s policy is typically very limited and very restrictive. For example, coverage is often as low as $1,000 – $5,000. And usually the same deductible applies to your overall renter’s or homeowner’s coverage as to the jewelry portion meaning that in a case of loss or damage, your actual protection may be well below the cost to replace or repair your jewelry.'
        },{
            id:'7',
            title:'I have a jewelry warranty, why do I need insurance?',
            value:'Most jewelry warranties are extremely limited in coverage. Typically only repairs of wear and tear are included. Damage that includes loss of any piece of the jewelry (say, a diamond from its setting) is usually not covered. Nor are theft or loss. For warranties that do include limited theft coverage, there are typically many exclusions such as “mysterious disappearance” (unexplained loss).'
        }];
        vm.productCategory = '';
        vm.productDescription = '';
        
        vm.products = [{
            id:'1',
            value:'Bracelets'
        },{
            id:'2',
            value:'Earrings'
        },{
            id:'3',
            value:'Necklaces'
        },{
            id:'4',
            value:'Rings'
        }];

        vm.descriptions = [{
            id:'1',
            value:'Mirayah'
        },{
            id:'2',
            value:'Amara'
        },{
            id:'3',
            value:'Mehek'
        },{
            id:'4',
            value:'Iva'
        },{
            id:'5',
            value:'Swarnam'
        },{
            id:'6',
            value:'Zuhur'
        },{
            id:'7',
            value:'Inara'
        },{
            id:'8',
            value:'Limited Edition'
        }];

        vm.data = [{
            id:'1',
            imgUrl:'UX/image/iceCream.svg',      
            title:'ULTRICIES',
            subTitle:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },{
            id:'2',
            imgUrl:'UX/image/boy.svg', 
            title:'PORTTITOR',
            subTitle:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        },{
            id:'3',
            imgUrl:'UX/image/aeroplane.svg',  
            title:'CURABITUR',
            subTitle:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }];

        vm.showDialog = function(){
        console.log("uib");
       /* var modalInstance = $uibModal.open({
            templateUrl: 'UX/app/popUp/popUp.html',
            backdrop: 'static',
            windowClass: 'app-modal-window modal-bank',
            size: 'lg'
        })*/
         $uibModal.open({
      templateUrl: 'UX/app/popUp/popUp.html',
      backdrop: 'static',
      size: 'sm',
    windowClass: 'app-modal-window modal-bank',
      controller: function ($scope, $uibModalInstance,$location) {
      /*  $scope.ok = function () {
          $uibModalInstance.close();
        };*/

        $scope.goToSuccess = function(){
            $uibModalInstance.dismiss('cancel');
            $location.path("/success");
        };
      
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      }
    })
};
    
       /* $('.sub-menu .parent').hide();
$(".sub-menu a").click(function () {
  $(this).parent(".sub-menu").children(".parent").slideToggle("200");
  $(this).find("i.fa").toggleClass("fa-angle-up fa-angle-down");
});*/

/*$(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});*/

 vm.clickProduct =function(){


 };



        vm.goToHome =function(){
            console.log("goToHome");
            $location.path("/home");

        }
        vm.selectProduct = function(value){
            console.log("value",value);
            vm.click = true;
            vm.productCategory = value;
           /*  $("#demo").toggle("slow");*/
        }
        vm.selectProductDes = function(value){
            vm.productDescription = value;
            console.log("value",value);
        }
       

    }
})();
