(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService', '$scope'];

  function ToBuyController(ShoppingListCheckOffService, $scope) {

    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.getItemsToBuy();
    console.log(toBuy.items, 'toBuy.items');

    toBuy.isListEmpty = function () {
      if (toBuy.items.length === 0) {
        return true
      }
    }

    toBuy.removeItem = function (index) {
      ShoppingListCheckOffService.removeItem(index)
    }

    toBuy.addItem = function (index) {
      ShoppingListCheckOffService.addItem(index)
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope'];

  function AlreadyBoughtController(ShoppingListCheckOffService, $scope) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems()
    console.log(alreadyBought.items);

    alreadyBought.isListEmpty = function () {
      if (alreadyBought.items.length === 0) {
        return true
      }
    }
  }

  ShoppingListCheckOffService.$inject = ['$rootScope'];

  function ShoppingListCheckOffService($rootScope) {
    var service = this;

    //list of shopping items
    var items = [
      {
        name: 'cookies1',
        quantity: 10
      },
      {
        name: 'cookies2',
        quantity: 11
      },
      {
        name: 'cookies3',
        quantity: 12
      },
      {
        name: 'cookies4',
        quantity: 13
      },
      {
        name: 'cookies5',
        quantity: 14
      }
    ];

    var boughtItems = [];
    var pushItem = {};

    service.getItemsToBuy = function () {
      return items;
    }

    service.getBoughtItems = function () {
      console.log(boughtItems, 'boughtItems');
      return boughtItems;
    }

    service.removeItem = function (index) {
      pushItem = items.splice(index, 1);
      console.log(pushItem, 'pushItem');
      boughtItems.push(pushItem);
      console.log(boughtItems, 'bought after removal');
      console.log(boughtItems[1]);
    }
  }
})();
