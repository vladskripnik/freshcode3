'use strict';
/* Factory */
phonecatApp.factory('Phone', [
  '$resource', function($resource) {
    return $resource('phones/:phoneId.:format', {

      phoneId: 'phones',
      format: 'json',
      apiKey: 'someKeyThis'
      /* http://localhost:8888/phones/phones.json?apiKey=someKeyThis */
    }, {
      // action: {method: <?>, params: <?>, isArray: <?>, ...}
      update: {method: 'PUT', params: {phoneId: '@phone'}, isArray: true}
    });
    //Phone.update(params, successcb, errorcb);
  }
  ])