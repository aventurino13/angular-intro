var myApp = angular.module( 'myApp', [] );

// $(document).ready(getItems());

//Set up controller
myApp.controller( 'InventoryController', function($http){
  console.log('-->NG');

  var vm = this;
  // vm.items = [];

  vm.addItem = function(){
    var newItem = {
      name: vm.nameIn,
      description: vm.descriptionIn
    };//end newItem
  $http({
    method:'POST',
    url: '/addItem',
    data: newItem,
  }).then(function success(response) {
   console.log('resp ->', response.data);
  //  getItems();
 });//end successs
 getItems();
};

function getItems(){
  $http({
    method: 'GET',
    url:'/getItems',
  }).then(function success(response) {
   console.log('resp ->', response.data);
   vm.itemData = response.data;
  });
}


vm.nameIn = '';
vm.descriptionIn = '';
});//end inventory controller
