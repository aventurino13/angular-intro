var myApp = angular.module( 'myApp', [] );

//Set up controller
myApp.controller( 'InventoryController', function(){
  console.log('-->NG');

  var vm = this;
  vm.items = [];

  vm.addItem = function(){
    var newItem = {
      name: vm.nameIn,
      description: vm.descriptionIn
    };//end newItem

    vm.items.push( newItem );
    vm.nameIn = '';
    vm.descriptionIn = '';
  };//end addItem  
});//end inventory controller
