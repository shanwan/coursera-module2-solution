(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {

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

  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBoughtItems()
    console.log(alreadyBought.items);

    alreadyBought.isListEmpty = function () {
      if (alreadyBought.items.length === 0) {
        return true
      }
    }
  }

  function ShoppingListCheckOffService() {
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

    service.getItemsToBuy = function () {
      return items;
    }

    service.getBoughtItems = function () {
      console.log(boughtItems, 'boughtItems');
      return boughtItems;
    }

    service.removeItem = function (index) {
      var pushItem = items.splice(index, 1);
      console.log(pushItem, 'pushItem');
      boughtItems.push(pushItem);
    }
  }
})();
